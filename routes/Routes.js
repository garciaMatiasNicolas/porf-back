import { Router } from "express";
import controllers from "../controllers/Controller.js";

const userRoutes = Router();

userRoutes.post("/log-in");
userRoutes.post("/sign-up", controllers.SignUp);
userRoutes.get("/get-all", controllers.getAll);

export default userRoutes;