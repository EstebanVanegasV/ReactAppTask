import { useContext } from "react";
import TaskContext from "../TaskContext";

export function useTaskOperations() {
  const { dispatch } = useContext(TaskContext);

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const updateTask = (updatedTask) => {
    dispatch({ type: "EDIT_TASK", payload: updatedTask });
  };

  return { addTask, deleteTask, updateTask };
}
