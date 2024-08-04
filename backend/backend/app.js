import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
const app = express();



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

