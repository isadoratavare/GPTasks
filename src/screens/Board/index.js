import { useParams } from "react-router-dom";
import { H3Class, subtitle } from "../../styles/headers";
import { useQuery } from "@apollo/client";
import { GET_BOARDS } from "../../data/queries/board";
import { useUser } from "../../context/useUser";

const statusTitle =
  "text-white-100 bg-blue-500 py-1 px-5 rounded-2xl opacity- capitalize";

const cardStyle =
  "my-4 mx-1 p-4 py-3 bg-white-100 rounded-2xl border-solid border-1 border-slate-200";

export default function Board() {
  const { id } = useParams();

  const { emailUser } = useUser();

  const { loading, data } = useQuery(GET_BOARDS, {
    variables: { owner: emailUser || localStorage.getItem("email") },
  });

  if (loading) return <p>Loading...</p>;

  const boardById = data?.getAllBoardsFromUser.filter(
    (board) => board.id === id
  );

  const statusList = [
    { status: "backlog" },
    { status: "To Do" },
    { status: "Doing" },
    { status: "Done" },
  ];

  const tasksByStatus = statusList.map((status) => {
    return {
      status: status.status,
      tasks: boardById[0]?.tasks.filter((task) => task.label == status.status),
    };
  });

  return (
    <div className="p-4 sm:ml-64">
      <h3 className={H3Class}>{boardById[0]?.title}</h3>
      <h4 className={subtitle}>{boardById[0]?.description}</h4>

      <div className="bg-board-gray my-4 rounded-2xl p-5">
        <div className="flex">
          {tasksByStatus.map((item) => (
            <div className="my-4 grid-cols-4 items-stretch w-full ">
              <span className={statusTitle}>{item?.status}</span>

              <div>
                {item?.tasks?.map((task) => (
                  <div className={cardStyle}>
                    <span className="font-medium">{task?.title}</span>
                    <div className="py-2 text-xs">{task?.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
