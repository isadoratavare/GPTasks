import React from "react";
import { H3Class } from "../../styles/headers";

import Board from "../../components/BoardCard";
import { useQuery } from "@apollo/client";
import { GET_BOARDS } from "../../data/queries/board";
import { useUser } from "../../hooks/useUser";
import Loading from "../../components/Loading/index";

export default function Boards() {
  const { emailUser, token } = useUser();
  const { loading, data } = useQuery(GET_BOARDS, {
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || token}`,
      },
    },
    variables: { owner: emailUser || localStorage.getItem("email") },
  });

  if (loading) return <Loading />;

  return (
    <div className="p-4 sm:ml-64">
      <h3 className={H3Class}>Boards</h3>

      <div className="grid md:grid-cols-5 justify-center py-6">
        {data?.getAllBoardsFromUser?.map((board, i) => (
          <Board key={i} item={board} />
        ))}
      </div>
    </div>
  );
}
