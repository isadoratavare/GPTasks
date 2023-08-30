import { useMemo, useState } from "react";
import ColumnContainer from "./ColumnContainer";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "./TaskCard";
import { useUser } from "../../../hooks/useUser";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BOARDS } from "../../../data/queries/board";
import { UPDATE_TASK } from "../../../data/mutation/task";

const defaultCols = [
  {
    id: "backlog",
    title: "Backlog",
  },
  {
    id: "todo",
    title: "To Do",
  },
  {
    id: "in-progress",
    title: "Doing",
  },
  {
    id: "done",
    title: "Done",
  },
];

function KanbanBoard({ boardId }) {
  const [columns, setColumns] = useState(defaultCols);

  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const { emailUser } = useUser();

  const { loading, data, refetch } = useQuery(GET_BOARDS, {
    variables: { owner: emailUser || localStorage.getItem("email") },
  });

  const [updateTaskFunction] = useMutation(UPDATE_TASK);

  const [tasks, setTasks] = useState(data.getAllBoardsFromUser[0].tasks);

  const [activeColumn, setActiveColumn] = useState();

  const [activeTask, setActiveTask] = useState();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  return (
    <div
      className="
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]
        bg-pink-100
    "
    >
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.id}
                  column={col}
                  updateTask={updateTask}
                  tasks={tasks.filter((task) => {
                    return task.label == col.id;
                  })}
                />
              ))}
            </SortableContext>
          </div>
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                updateTask={updateTask}
                tasks={tasks.filter((task) => task.label === activeColumn.id)}
              />
            )}
            {activeTask && (
              <TaskCard
                task={activeTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function updateTask(id, content) {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });

    setTasks(newTasks);
  }

  function onDragStart(event) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);

      return;
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragEnd(event) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current?.type === "Column";
    if (!isActiveAColumn) return;

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;
    // // Im dropping a Task over another Task
    // if (isActiveATask && isOverATask) {
    //   setTasks((tasks) => {
    //     const activeIndex = tasks.findIndex((t) => t.id === activeId);
    //     const overIndex = tasks.findIndex((t) => t.id === overId);

    //     if (tasks[activeIndex].label != tasks[overIndex].label) {
    //       // Fix introduced after video recording
    //       tasks[activeIndex].label = tasks[overIndex].label;
    //       return arrayMove(tasks, activeIndex, overIndex - 1);
    //     }

    //     return arrayMove(tasks, activeIndex, overIndex);
    //   });
    // }

    const isOverAColumn = over.data.current?.type === "Column";
    console.log("Encima de uma coluna? ", isOverAColumn);
    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      const newStatus = overId;
      const activeIndex = tasks.findIndex((t) => t.id === activeId);

      updateTaskFunction({
        variables: {
          input: {
            boardId,
            taskId: activeId,
            field: "label",
            value: newStatus,
          },
        },
      })
        .then((res) => {
          setTasks(res?.data?.updateTaskFieldsBasedOnBoardId?.tasks);
        })
        .catch((err) => {
          alert(err);
        })
        .finally(() => {
          refetch();
        });
    }
  }
}

export default KanbanBoard;
