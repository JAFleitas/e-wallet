import { Response, Request } from "express";

const { user } = require("../../db");

const createUser = async (req: Request, res: Response) => {
  const { name, username, email, password } = req.body;

  const newUser = await user.create({ name, username, email, password });

  res.json(newUser);
};
export default createUser;
