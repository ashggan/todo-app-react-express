import express from "express";
import { createTask , getTasksByUser , updateTask ,deleteTask ,searchTasks } from "../controllers/taskController.js";
 
const router = express.Router();

router.post("/", createTask);
router.get("/:userId", getTasksByUser);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/search", searchTasks);

export default router;
