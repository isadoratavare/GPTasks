import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [isModalTaskOpen, setIsModalTaskOpen] = useState(false);
  const [task, setTask] = useState({});
  return (
    <TaskContext.Provider
      value={{
        isModalTaskOpen,
        setIsModalTaskOpen,
        task,
        setTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};
