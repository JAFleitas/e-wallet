import bcrypt from "bcrypt";
import { Response } from "express";
import { ReqCreateUser } from "../interface/attributesUser";

const { user } = require("../../db");

const createUser = async (
  req: ReqCreateUser,
  res: Response
): Promise<Response> => {
  try {
    const { name, username, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    const [newUser, created] = await user.findOrCreate({
      where: { email },
      defaults: {
        name,
        username,
        password: passwordHash,
      },
    });
    if (created) {
      return res.json(newUser);
    }

    return res.send("There is already a user with that email!");
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).send("Internal Error Server");
  }
};
export default createUser;
