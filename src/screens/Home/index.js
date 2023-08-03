import React from "react";
import { H3Class, subtitle } from "../../styles/headers";
import CardTask from "../../components/CardTask";
import ProductivityChart from "../../components/ProductivityChart";

import { tasks, tasksCompleted } from "../../data/mocks/tasks";
import Button from "../../components/Button/index";

import { projectsDoneTasks } from "../../data/mocks/tasks";
import Board from "../../components/BoardCard/index";
import { Link } from "react-router-dom";

const Home = () => {
  const [onGoingOpen, setOnGoingOpen] = React.useState(true);
  const [completedOpen, setCompletedOpen] = React.useState(false);

  function openOnGoing() {
    setOnGoingOpen(true);
    setCompletedOpen(false);
  }
  function openFinished() {
    setOnGoingOpen(false);
    setCompletedOpen(true);
  }

  const activeStyle =
    "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
  const inactiveStyle =
    "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

  return (
    <div className="py-7 sm:ml-64 px-8">
      <div className="flex justify-between items-center">
        <div className="pb-5">
          <h3 className={H3Class}>Hello Alice!</h3>
          <h4 className={subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit!
          </h4>
        </div>
        <div className="px-2">
          <Link to="/create-board">
            <Button
              title="Criar quadro"
              onPress={() => {}}
              IconRight={() => (
                <img
                  src={require("../../assets/images/plus.svg").default}
                  alt="Add"
                  className="w-6 h-6 fill-white"
                />
              )}
            />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-100 p-5 rounded-2xl">
          <h3 className="text-2xl font-extrabold">My Tasks</h3>

          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <ul className="flex flex-wrap -mb-px">
              <li onClick={openOnGoing} className="cursor-pointer">
                <span className={onGoingOpen ? activeStyle : inactiveStyle}>
                  On Going
                </span>
              </li>
              <li onClick={openFinished} className="cursor-pointer">
                <span className={completedOpen ? activeStyle : inactiveStyle}>
                  Finished
                </span>
              </li>
            </ul>
          </div>

          {onGoingOpen && (
            <div>
              <div className="grid md:grid-cols-2 gap-4">
                {tasks.map((task, i) => (
                  <CardTask
                    key={i}
                    colorTag={task.colorTag}
                    name={task.name}
                    description={task.description}
                    projectName={task.projectName}
                  />
                ))}
              </div>
            </div>
          )}
          {completedOpen && (
            <div>
              <div className="grid md:grid-cols-2 gap-4">
                {tasksCompleted.map((task, i) => (
                  <CardTask
                    key={i}
                    colorTag={task.colorTag}
                    name={task.name}
                    description={task.description}
                    projectName={task.projectName}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="">
          <div className="p-5">
            <h3 className="text-2xl font-extrabold">Productivity</h3>
            <div className="flex justify-center">
              <ProductivityChart />
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-2xl font-extrabold">Boards</h3>
            <div className="grid md:grid-cols-2 justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
