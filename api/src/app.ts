import express, { Application } from "express";
// importo los routes
import routerUser from "./routes/userRouter";
import routerAccount from "./routes/accountRouter";

const logger = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
const cors = require("cors");

const app: Application = express();

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// routes

app.use("/user", routerUser);
app.use("/account", routerAccount);

export default app;
