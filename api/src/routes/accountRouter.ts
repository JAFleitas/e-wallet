import { Router } from "express";
import createAccounts from "../controllers/accountControllers";

const routerAccount: Router = Router();

routerAccount.post("/create", createAccounts);

export default routerAccount;
