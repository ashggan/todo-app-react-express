import prisma from "../models/prismaClient.js"; 


export const createTask = async (req, res) => {
    try {
        const { title, description, deadline } = req.body;
        const userId = 'kkmd' // req.user.id; Extract user ID from request
        const task = await  prisma.task.create({
            data: { title, description, deadline, status: "TODO", userId },
          });
        res.status(201).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating task" });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks =  await prisma.task.findMany();// { where: { userId: (req).user.id } }
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving tasks" });
    }
};

export const updateTask = async (req , res) => {
    try {
        const { id } = req.params;
        // res.send(id)
        const { title, description, deadline } = req.body;
        const updatedTask = await prisma.task.update({
            where: { id },
            data: { title, description, deadline },
        });
        res.json(updatedTask);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error updating task" });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.task.delete({ where: { id } });
        res.json({ message: "Task deleted" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error deleting task" });
    }
};

export const changeTaskStatus = async (req, res ) => {
    try {
        const { id  } = req.params;
        const { status } = req.body; 
        const updatedTask = await prisma.task.update({
            where: { id },
            data: { status },
        });
        res.json(updatedTask);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error changing task status" });
    }
};
