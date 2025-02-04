import express from "express";
import { createTask , getTasks , updateTask ,deleteTask ,changeTaskStatus } from "../controllers/taskController.js";
// import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id", changeTaskStatus);

export default router;
