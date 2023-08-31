import { useParams } from "react-router-dom";
import { H3Class, subtitle } from "../../styles/headers";
import { useQuery } from "@apollo/client";
import { GET_BOARDS } from "../../data/queries/board";
import { useUser } from "../../hooks/useUser";
import KanbanBoard from "./components/KanbanBoard";
import ModalTask from "../../components/ModalTask";

const statusTitle =
  "text-white-100 bg-blue-500 py-1 px-5 rounded-2xl opacity- capitalize";

const cardStyle =
  "my-4 mx-1 p-4 py-3 bg-white-100 rounded-2xl border-solid border-1 border-slate-200";

export default function Board() {
  const { id } = useParams();

  const { emailUser, token } = useUser();

  const { loading, data, refetch } = useQuery(GET_BOARDS, {
    variables: { owner: emailUser || localStorage.getItem("email") },
  });

  const boardById = data?.getAllBoardsFromUser?.filter(
    (board) => board.id === id
  );

  return (
    <div className="p-4 sm:ml-64">
      <ModalTask />
      <KanbanBoard boardId={id} data={boardById[0]} refetch={refetch} />
    </div>
  );
}
