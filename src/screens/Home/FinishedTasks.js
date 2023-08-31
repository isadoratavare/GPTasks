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
  if (error) {
    console.log(error.message);
  }
  const arraysTasks = data?.getAllBoardsFromUser?.map((board) => board.tasks);

  const flattenedArray = [].concat(...arraysTasks);
  const done = flattenedArray?.filter((task) => task.label === "done");

  return (
    <>
      {done.map((task, i) => (
        <CardTask
          key={i}
          colorTag={task.colorTag}
          name={task.title}
          description={task.description}
          projectName={task.projectName}
        />
      ))}
    </>
  );
}
