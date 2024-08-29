import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/movie",movieRouter);





mongoose
  .connect(
    `mongodb+srv://rajatsubhrochowdhury2000:sagl2GLBcXiK8cfz@cluster1.wjem02e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connected to database and server is running")
    )
  )
  .catch((e) => console.log(e));

