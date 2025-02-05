import express from "express";
import { createTask , getTasksByUser , updateTask ,deleteTask, searchTasks  } from "../Controllers/taskController";
 
const router = express.Router();

router.post("/", createTask);
router.get("/:userId", getTasksByUser);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
// router.get("/search", searchTasks);
router.get("/search", async (req, res, next) => {
    searchTasks(req, res).catch(next);
  });
export default router;
