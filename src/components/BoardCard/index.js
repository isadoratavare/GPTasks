import React from "react";
import { Link } from "react-router-dom";

export default function Board({ id, name, color, tasks, tasksCompleted }) {
  const percentage = (tasksCompleted / tasks) * 100;

  return (
    <div className={`p-4 m-1 ${color} rounded-lg p-3 w-52 h-28`}>
      <Link to={"/board/" + id}>
        <div className="py-1 text-white-100 ">{name}</div>

        <div className="py-3">
          <div className="flex justify-between py-2">
            <div className="text-white-100">Tasks</div>
            <div className="text-white-100">
              <span>{percentage}%</span>
            </div>
          </div>

          <div className="relative flex">
            <div class="w-full rounded-full h-2.5 opacity-40 bg-white-100"></div>
            <div
              class="bg-white-100 h-2.5 rounded-l-lg absolute z-50"
              style={{ width: percentage }}
            ></div>
          </div>
        </div>
      </Link>
    </div>
  );
}
