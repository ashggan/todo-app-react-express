import express, { Request, Response } from "express";
import { createTask , getTasksByUser , updateTask ,deleteTask, FindTask   } from "../Controllers/taskController";
 
const router = express.Router();

router.post("/", createTask);
router.get("/:userId", getTasksByUser);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/search/:userId", async (req, res, next) => {
    FindTask(req, res) 
  });
export default router;
