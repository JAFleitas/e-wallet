import express, { Router } from "express";
import createUser from "../controllers/userControllers";

const routerUser: Router = express.Router();

routerUser.post("/", createUser);

export default routerUser;
