import { Router } from "express";
import createUser from "../controllers/userControllers";

const routerUser: Router = Router();

routerUser.post("/signup", createUser);

export default routerUser;
