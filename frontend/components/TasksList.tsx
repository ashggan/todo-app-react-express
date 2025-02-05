import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import TaskCard from "./TaskCard";
import { Task } from "../utils/type";
import { fetchTasks, deleteTask, searchTask } from "../api/tasks";
import TaskForm from "./TaskForm";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const TaskList = () => {
  const { user } = useAuth0();

  const queryClient = useQueryClient();
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [query, setQuery] = useState("");

  const { data: tasks, isLoading, error, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTasks(user?.email as string),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
    onError: (err) => console.error("Error deleting task:", err),
  });

  const searchMutation = useMutation({
    mutationFn: searchTask,
    onSuccess: (data) => {
      queryClient.setQueryData(["tasks"], data);  
    },
    onError: (err) => console.error("Error finding task:", err),
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.trim() === "") {
      refetch();  
    } else {
      searchMutation.mutate(e.target.value);  
    }
  };

  if (isLoading) return <p className="text-center text-gray-500">Loading tasks...</p>;
  if (error instanceof Error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <>
      <div className="max-w-2xl mx-auto mt-8 h-full">
        {/* Search Bar */}
        <div className="flex items-start border border-gray-300 rounded-full px-3 py-2 shadow-sm transition">
          <CiSearch className="text-gray-500 text-xl mr-2" />
          <input
            type="text"
            placeholder="Find a task"
            value={query}
            onChange={handleSearch}  
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Task List */}
        <div className="mt-4 space-y-4">
          {tasks && tasks.length > 0 ? (
            tasks.map((task: Task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={() => deleteMutation.mutate(task.id)}
                onEdit={() => setTaskToEdit(task)}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center">No tasks found.</p>
          )}
        </div>
      </div>

      <TaskForm taskToEdit={taskToEdit} onCancel={() => setTaskToEdit(null)} />
    </>
  );
};

export default TaskList;
