import express from "express";
import { deleteUser, getAllUsers, login, signup } from "../controllers/user-controllers";


const userRouter =express.Router();


userRouter.get("/",getAllUsers); 
userRouter.post("/signup",signup); 
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);
userRouter.post("/login",login);

export default userRouter;

