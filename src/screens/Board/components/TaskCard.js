import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useTask } from "../../../hooks/useTask";

function TaskCard({ task, updateTask }) {
  const { setIsModalTaskOpen, setTask } = useTask();
  const date = new Date(parseInt(task.dueDate));
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
      bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-rose-500  cursor-grab relative
      "
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => {
        setIsModalTaskOpen(true);
        setTask(task);
      }}
      {...attributes}
      {...listeners}
      className=""
    >
      <div
        className="p-3 m-1 rounded-2xl bg-white-100 w-[250px]"
        onClick={() => {
          setIsModalTaskOpen((prevState) => !prevState);
          setTask(task);
        }}
      >
        <div
          className={`bg-blue-500 text-white rounded-xl px-2  inline-block my-1`}
        >
          <p className="text-white-100 font-semibold text-sm">{task.id}</p>
        </div>
        <div>
          <div className="font-medium my-2">
            <p>{task.title}</p>
          </div>
          <div>
            <p className="text-sm">Points: {task.storyPoints}</p>
            {/* <p className="text-sm text-right">
              {date.getDate() +
                "/" +
                (date.getMonth() + 1) +
                "/" +
                date.getFullYear()}
            </p> */}
          </div>
          {/* <div className="font-normal text-slate-300 text-sm my-2">
          <p>{description}</p>
        </div> */}
        </div>
      </div>
      {/* <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap font-medium">
        {task.title}
      </p> */}
      {/* <div className="bg-pink-100">
        <p className="text-sm ">
          {date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear()}
        </p>
      </div> */}
    </div>
  );
}

export default TaskCard;
