import React, { useMemo } from "react";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "./TaskCard";

function ColumnContainer({ column, tasks, updateTask }) {
  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);
  const { setNodeRef, transform, transition } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="my-4 grid-cols-4 items-stretch w-[300px] h-screen bg-slate-200 rounded-2xl"
    >
      <span className="text-white-100 bg-blue-500 py-1 px-4 rounded-2xl opacity- capitalize">
        {column.title}
      </span>

      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} updateTask={updateTask} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

export default ColumnContainer;
