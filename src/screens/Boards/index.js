import React from "react";
import { H3Class } from "../../styles/headers";
import { projectsDoneTasks } from "../../data/mocks/tasks";

import Board from "../../components/BoardCard";

export default function Boards() {
  return (
    <div className="p-4 sm:ml-64">
      <h3 className={H3Class}>Boards</h3>

      <div className="grid md:grid-cols-5 justify-center py-6">
        {projectsDoneTasks.map((board, i) => (
          <Board
            key={i}
            id={board.id}
            name={board.name}
            color={board.colorTag}
            tasks={board.tasksTotal}
            tasksCompleted={board.tasksCompleted}
          />
        ))}
      </div>
    </div>
  );
}
