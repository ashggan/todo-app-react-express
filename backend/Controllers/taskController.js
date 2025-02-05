import prisma from "../models/prismaClient.js"; 


export const createTask = async (req, res) => {
    try {
        const { title, description, deadline ,status , userId} = req.body;
        const task = await  prisma.task.create({
            data: { title, description, deadline, status: status || "TODO", userId },
          });
        res.status(201).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating task" });
    }
};

export const getTasksByUser = async (req, res) => {
    try {
        const {userId} = req.params 
        const tasks =  await prisma.task.findMany({where : {userId }}); 
        res.json(tasks);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error retrieving tasks" });
    }
};

export const updateTask = async (req , res) => {
    try {
        const { id } = req.params;
        const { title, description, deadline , status } = req.body;
        const updatedTask = await prisma.task.update({
            where: { id },
            data: { title, description, deadline , status },
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

 

export const searchTasks = async (req, res) => {
    try {
        const { query } = req.query; 
        
        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }

        const tasks = await prisma.task.findMany({
            where: {
                OR: [
                    { title: { contains: query, mode: "insensitive" } },  
                    { description: { contains: query, mode: "insensitive" } },  
                ]
            }
        });

        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error searching tasks" });
    }
};
