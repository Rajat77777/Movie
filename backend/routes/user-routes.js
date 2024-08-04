import express from "express";
import { getAllUsers } from "../controllers/user-controllers";


const userRouter =express.Router();


userRouter.get("/",getAllUsers); 
userRouter.post("/",getAllUsers); 



export default userRouter;

