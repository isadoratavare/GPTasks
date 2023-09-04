import { useTask } from "../../hooks/useTask";

export default function CardTask({
  colorTag,
  name,
  projectName,
  description,
  task,
}) {
  const { setIsModalTaskOpen, setTask } = useTask();

  const date = new Date(parseInt(task.dueDate));
  return (
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
        <p className="text-white-100 font-semibold text-sm">{projectName}</p>
      </div>
      <div>
        <div className="font-medium my-2">
          <p>{name}</p>
        </div>
        <div>
          <p className="text-sm text-right">
            {date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear()}
          </p>
        </div>
        {/* <div className="font-normal text-slate-300 text-sm my-2">
          <p>{description}</p>
        </div> */}
      </div>
    </div>
  );
}
