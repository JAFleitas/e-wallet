const express = require("express");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
let cors = require("cors");

const app = express();

//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes

module.exports = app;
