import express from "express";
import { getAllUsers, signup } from "../controllers/user-controllers";


const userRouter =express.Router();


userRouter.get("/",getAllUsers); 
userRouter.post("/signup",signup); 
userRouter.put("/:id",updateUser);


export default userRouter;

