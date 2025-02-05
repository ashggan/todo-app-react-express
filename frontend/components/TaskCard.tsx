import React from "react";
import { TaskCardProps } from "../utils/type";
import { FaRegTrashAlt , FaRegEdit   } from "react-icons/fa";

export default function TaskCard({ task, onDelete , onEdit }: TaskCardProps) {
    return (
        <div className="bg-white shadow-md hover:shadow-lg hover:cursor-pointer rounded-lg p-4 flex justify-between items-start border border-gray-200 relative">
        <div className="absolute top-2 right-2 flex space-x-2">
          {onEdit && (
            <button
              onClick={() => onEdit(task)}
              className="hover:text-red-600 text-black px-2 py-1 rounded-lg text-sm"
            >
              <FaRegEdit />
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(task.id)}
              className="hover:text-red-600 text-black px-2 py-1 rounded-lg text-sm"
            >
              <FaRegTrashAlt />
            </button>
          )}
        </div>
      
        <div className="w-full">
  <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
  <p className="text-gray-500 text-xs">{task.description}</p>

  {/* Row for Due Date & Status */}
  <div className="flex justify-between items-center mt-2">
    <p className="text-sm text-gray-500">Due: {new Date(task.deadline).toLocaleDateString()}</p>

    {/* Status Badge */}
    <span
      className={`
        px-3 py-1 text-xs font-semibold rounded-full
        ${task.status === "TODO" ? "bg-gray-200 text-gray-700" : ""}
        ${task.status === "IN_PROGRESS" ? "bg-yellow-200 text-yellow-800" : ""}
        ${task.status === "COMPLETED" ? "bg-green-200 text-green-800" : ""}
      `}
    >
      {task.status?.replace("_", " ")}
    </span>
  </div>
</div>

      </div>
      
        );
  }
  