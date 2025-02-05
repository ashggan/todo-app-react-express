import experss, { NextFunction, Request, Response } from 'express';
import  { auth }  from 'express-openid-connect';
import cors from 'cors';
import { config } from './utils/config';
import taskRoutes from './routes/taskRoutes';


const app = experss();

app.use(cors());
app.use(auth(config));
app.use(experss.json());


app.get("/", function (req, res) {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.use("/tasks", taskRoutes);

// app.use((err :unknown, req :Request, res : Response, next :NextFunction) => {
//   console.error(err);
//   res.status(err?.status || 500).json({ message: err.message || "Internal Server Error" });
// });


// Run the server!
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

 