import experss from 'express';
import  { auth }  from 'express-openid-connect';
import taskRoutes from "./routes/taskRoutes.js";
import cors from 'cors';
import {config} from './utils/config.js'

const app = experss();

app.use(cors());
app.use(auth(config));
app.use(experss.json());


// Declare a route
app.get("/", function (req, res) {
  // res.send({ hello: "world" });
  // console.log(req.oidc)
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');

});
app.use("/tasks", taskRoutes);

 

// Run the server!
const port = process.env.PORT || 3000;
app.listen({ port }, function (err, address) {
   console.log(`server runnin on ${port}`)
 }); 
