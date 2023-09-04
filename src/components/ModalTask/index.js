import { useTask } from "../../hooks/useTask";

export default function ModalTask() {
  const { isModalTaskOpen, setIsModalTaskOpen, task } = useTask();

  if (!isModalTaskOpen) return <></>;
  const date = new Date(parseInt(task.dueDate));
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-100 outline-none focus:outline-none">
            <div className="relative p-6 flex-auto">
              <h2 className="text-2xl font-semibold">{task.title}</h2>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {task.description}
              </p>
              <div>
                <span>Story Points: {task.storyPoints}</span>
                <div className="my-2">
                  Finish Date:{" "}
                  {date.getDate() +
                    "/" +
                    (date.getMonth() + 1) +
                    "/" +
                    date.getFullYear()}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end p-6 rounded-b">
              <button
                className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsModalTaskOpen(false)}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
