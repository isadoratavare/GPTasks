import React from "react";
export default function Board({ name, color, tasks, tasksCompleted }) {
  const percentage = (tasksCompleted / tasks) * 100;

  return (
    // <div className={`p-4 sm:ml-64 ${color} rounded-lg p-3`}>
    //   <h1 className="text-white-100">{name}</h1>

    //   <div className="py-5">
    //     <div className="py-2">
    //       <span>{tasksCompleted} Tasks</span>
    //     </div>

    //     <div>
    //       <div class="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
    //         <div
    //           class="bg-blue-600 h-2.5 rounded-full"
    //           style={{ width: percentage }}
    //         ></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="px-2">{name}</div>
  );
}
