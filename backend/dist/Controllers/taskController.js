"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTasks = exports.deleteTask = exports.updateTask = exports.getTasksByUser = exports.createTask = void 0;
const prismaClient_1 = __importDefault(require("../models/prismaClient"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, deadline, status, userId } = req.body;
        const task = yield prismaClient_1.default.task.create({
            data: { title, description, deadline, status: status || "TODO", userId },
        });
        res.status(201).json(task);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating task" });
    }
});
exports.createTask = createTask;
const getTasksByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const tasks = yield prismaClient_1.default.task.findMany({ where: { userId } });
        res.json(tasks);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving tasks" });
    }
});
exports.getTasksByUser = getTasksByUser;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, description, deadline, status } = req.body;
        const updatedTask = yield prismaClient_1.default.task.update({
            where: { id },
            data: { title, description, deadline, status },
        });
        res.json(updatedTask);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating task" });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield prismaClient_1.default.task.delete({ where: { id } });
        res.json({ message: "Task deleted" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting task" });
    }
});
exports.deleteTask = deleteTask;
const searchTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.query;
        if (!query || typeof query !== "string") {
            return res.status(400).json({ message: "Search query is required" });
        }
        const tasks = yield prismaClient_1.default.task.findMany({
            where: {
                OR: [
                    { title: { contains: query, mode: "insensitive" } },
                    { description: { contains: query, mode: "insensitive" } },
                ]
            }
        });
        res.json(tasks);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error searching tasks" });
    }
});
exports.searchTasks = searchTasks;
