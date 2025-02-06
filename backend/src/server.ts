import experss, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';

const app = experss();


app.use(cors());
app.use(experss.json());


app.use("/tasks", taskRoutes);


// Run the server!
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

 