import { Router } from "express";
import createUser from "../controllers/userControllers";
import loginUser from "../controllers/userLogin";
import changeUserInfo from "../controllers/changeUserInfo";
import authenticateToken from "../controllers/authenticateToken";

const routerUser: Router = Router();

routerUser.post("/signup", createUser);
routerUser.post("/login", loginUser);
routerUser.post("/userInfo", [authenticateToken, changeUserInfo])

export default routerUser;
