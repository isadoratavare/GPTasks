import React from "react";
import { GET_BOARDS } from "../../data/queries/board";
import CardTask from "../../components/CardTask/index";
import { useUser } from "../../hooks/useUser";
import { useQuery } from "@apollo/client";

export default function FinishedTasks() {
  const { emailUser } = useUser();
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
  if (error && data === undefined) {
    return <p>console.error</p>;
  }
  if (error?.message == "Unauthorized") {
    localStorage.removeItem("token");

    window.location.reload();
  }
  const arraysTasks =
    data?.getAllBoardsFromUser?.map((board) => {
      return {
        board: board.title,
        tasks: board.tasks.filter((task) => task.label === "done"),
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
      {newArray.map((task, i) => {
        return (
          <CardTask
            key={i}
            colorTag={task.colorTag}
            name={task.task?.title}
            description={task.task?.description}
            projectName={task.board}
            task={task.task}
          />
        );
      })}
    </>
  );
}
