import express, { Application, Router } from "express";
// imports los routes
import routerUser from "./routes/userRouter";
const routes = require('../routes/index');

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
app.use(express.json())

// routes

app.use("/user", routerUser);
app.use('/', routes)

// const user: string[] = []
// app.get('/users', (req,res) =>{
//     res.json(user)
// })

export default app;
