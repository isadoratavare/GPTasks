import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOARDS } from "../../data/queries/board";
import { useUser } from "../../hooks/useUser";
import CardTask from "../../components/CardTask/index";

export default function OnGoingTasks() {
  {
    /* {tasks.map((task, i) => (
                  <CardTask
                    key={i}
                    colorTag={task.colorTag}
                    name={task.name}
                    description={task.description}
                    projectName={task.projectName}
                  />
                ))} */
  }
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
    console.log("Unauthorized");
  }
  const arraysTasks = data.getAllBoardsFromUser.map((board) => board.tasks);

  const flattenedArray = [].concat(...arraysTasks);
  const inProgressTasks = flattenedArray.filter(
    (task) => task.label === "in-progress"
  );

  return (
    <>
      {inProgressTasks.map((task, i) => (
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
