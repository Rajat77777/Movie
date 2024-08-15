import express from "express";
import { addAdmin } from "../controllers/admin-controller";

const adminRouter = express.Router();

adminRouter.post("/signup",addAdmin);
adminRouter.post("/login",addAdmin);

export default adminRouter;

