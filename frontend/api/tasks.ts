import { Task } from "../utils/type";
import axios from "axios";

const BAER_URL = 'http://localhost:8000/tasks'

export const fetchTasks = async (userId :string ) => {
  const { data } = await axios.get(`${BAER_URL}/${userId}`);
  return data.map((task: Task) => ({
    ...task,
    deadline: task.deadline || "",  
  }));
};
  
export const deleteTask = async (taskId: string) => {
  await axios.delete(`${BAER_URL}/${taskId}`);
};

export const editTask = async (updatedTask: Task) => {
  const { id, ...taskData } = updatedTask;
  const { data } = await axios.patch(`${BAER_URL}/${id}`, taskData);
  return data;
};

export const updateTask = async (updatedTask: Task): Promise<Task> => {
  const { data } = await axios.put(
    `${BAER_URL}/${updatedTask.id}`,
    updatedTask
  );
  return data;
};

export const createTask = async (newTask: Task): Promise<Task> => {
  const { data } = await axios.post(`${BAER_URL}`, newTask);
  return data;
};


export const searchTask = async(query : string) => {
  const { data } = await axios.get(`${BAER_URL}/search?query=${query}`);
  return data;
}
