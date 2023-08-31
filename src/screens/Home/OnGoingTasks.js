import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOARDS } from "../../data/queries/board";
import { useUser } from "../../hooks/useUser";
import CardTask from "../../components/CardTask/index";

export default function OnGoingTasks() {
  const { emailUser, token } = useUser();
  const { loading, data, refetch, error } = useQuery(GET_BOARDS, {
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
    variables: { owner: emailUser || localStorage.getItem("email") },
  });
  if (loading) return <p>Loading...</p>;
  if (!data) refetch();
  if (error) {
    if (error.message == "Unauthorized") {
      localStorage.removeItem("token");
      window.location.reload();
    }
    return <p>{error.message}</p>;
  }
  const arraysTasks =
    data?.getAllBoardsFromUser?.map((board) => {
      return {
        board: board.title,
        tasks: board.tasks.filter((task) => task.label === "in-progress"),
      };
    }) || [];
  const newArray = [];

  arraysTasks.forEach((item) => {
    const boardName = item.board;
    item.tasks.forEach((taskItem) => {
      newArray.push({ board: boardName, task: taskItem });
    });
  });

  return (
    <>
      {newArray.map((task, i) => (
        <CardTask
          key={i}
          colorTag={task.colorTag}
          name={task.task?.title}
          description={task.task?.description}
          projectName={task.board}
        />
      ))}
    </>
  );
}
