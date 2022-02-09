import bcrypt from "bcrypt";
import { Response } from "express";
import { ReqCreateUser } from "../interface/attributesUser";

const { user } = require("../../db");

const createUser = async (
  req: ReqCreateUser,
  res: Response
): Promise<Response> => {
  try {
    const { name, username, email, password, profilePic, lastname, birth } =
      req.body;
    const users = await user.findOne({ where: { username } });
    if (users) {
      return res.send("Username is already used!");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    // eslint-disable-next-line no-unused-vars
    const [newUser, created] = await user.findOrCreate({
      where: { email },
      defaults: {
        name,
        lastname,
        username,
        password: passwordHash,
        profilePic,
        birth,
      },
    });
    console.log(newUser);
    if (created) {
      return res.json("User created successfully!");
    }

    return res.send("There is already a user with that email!");
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).send("Internal Error Server");
  }
};
export default createUser;
