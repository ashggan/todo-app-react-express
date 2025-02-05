import { Task } from "../utils/type";
import axios from "axios";

export const fetchTasks = async (userId :string ) => {
  const { data } = await axios.get(`http://localhost:3000/tasks/${userId}`);
  return data.map((task: Task) => ({
    ...task,
    deadline: task.deadline || "",  
  }));
};
  
export const deleteTask = async (taskId: string) => {
  await axios.delete(`http://localhost:3000/tasks/${taskId}`);
};

export const editTask = async (updatedTask: Task) => {
  const { id, ...taskData } = updatedTask;
  const { data } = await axios.patch(`http://localhost:3000/tasks/${id}`, taskData);
  return data;
};

export const updateTask = async (updatedTask: Task): Promise<Task> => {
  const { data } = await axios.put(
    `http://localhost:3000/tasks/${updatedTask.id}`,
    updatedTask
  );
  return data;
};

export const createTask = async (newTask: Task): Promise<Task> => {
  const { data } = await axios.post("http://localhost:3000/tasks", newTask);
  return data;
};


export const searchTask = async(query : string) => {
  const { data } = await axios.get(`http://localhost:3000/tasks/search?query=${query}`);
  return data;
}
