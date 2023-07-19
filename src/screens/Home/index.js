import React from "react";
import { H3Class, subtitle } from "../../styles/headers";
import CardTask from "../../components/CardTask";

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
      <div className="pb-5">
        <h3 className={H3Class}>Hello Alice!</h3>
        <h4 className={subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit!
        </h4>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-100 p-5 rounded-2xl">
          <h3 className="text-2xl font-extrabold">My Tasks</h3>

          <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <ul class="flex flex-wrap -mb-px">
              <li onClick={openOnGoing} className="cursor-pointer">
                <a class={onGoingOpen ? activeStyle : inactiveStyle}>
                  On Going
                </a>
              </li>
              <li onClick={openFinished} className="cursor-pointer">
                <a class={completedOpen ? activeStyle : inactiveStyle}>
                  Finished
                </a>
              </li>
            </ul>
          </div>

          {onGoingOpen && (
            <div>
              <div className="grid md:grid-cols-2 gap-4">
                <CardTask colorTag="bg-blue-700" />
                <CardTask colorTag="bg-orange-500" />
              </div>
            </div>
          )}
          {completedOpen && (
            <div>
              <div className="grid md:grid-cols-2 gap-4">
                <CardTask colorTag="bg-blue-700" />
                <CardTask colorTag="bg-orange-500" />
                <CardTask colorTag="bg-orange-500" />
                <CardTask colorTag="bg-blue-700" />
                <CardTask colorTag="bg-blue-700" />
              </div>
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-2xl font-extrabold">Productivity</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
