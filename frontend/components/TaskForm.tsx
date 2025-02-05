import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Task, TaskFormProps, TaskStatus } from "../utils/type";
import { createTask, updateTask } from "../api/tasks";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const TaskForm = ({ taskToEdit, onCancel }: TaskFormProps) => {

  const { user } = useAuth0();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [userId] = useState("");
  const [status, setStatus] = useState<TaskStatus>(TaskStatus.TODO);

  const queryClient = useQueryClient();  

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDeadline("");
    setStatus(TaskStatus.TODO);
    if (onCancel) onCancel();  
  };

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDeadline(taskToEdit.deadline?.split("T")[0] || "");
      setStatus(taskToEdit.status as TaskStatus)
    } else {
      resetForm();  
    }
  }, [taskToEdit]);

  const createMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      resetForm();
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      resetForm();  
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !deadline ) {
      alert("All fields are required!");
      return;
    }

    const taskData: Task = {
      id: taskToEdit ? taskToEdit.id : "",
      title,
      description,
      status : status || 'TODO',
      deadline: new Date(deadline).toISOString(),
      userId : userId || user?.email || 'unknown_user'
    };

    if (taskToEdit) {
      updateMutation.mutate(taskData);
    } else {
      createMutation.mutate(taskData);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {taskToEdit ? "Update Task" : "Add a Task"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white   rounded-lg p-4  "
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md mb-2  focus:none"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md mb-2  focus:none"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full p-2 border rounded-md mb-2  focus:none"
        />
        <select
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
            className="w-full mb-2 border rounded-lg p-2 text-gray-700"
          >
            <option value="TODO">To Do</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full transition"
            disabled={createMutation.isPending || updateMutation.isPending}
          >
            {taskToEdit ? "Update Task" : "Add Task"}
          </button>
          {taskToEdit && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md w-full transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
