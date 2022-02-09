require('dotenv').config()
import bcrypt from "bcrypt";
import { Response } from "express";
import { ReqCreateUser } from "../interface/attributesUser";
const jwt = require('jsonwebtoken');


const { user } = require("../../db");

const dbInfo = async() => {
    let search = await user.findAll()
    return search
}

const loginUser = async (
    req: ReqCreateUser,
    res: Response
  ) => {
    try {
    const {email, password} = req.body;
    let db = await dbInfo()
      const users = await db.find((x: { email: string; })=> x.email == email);
      if (users == null) {
        return res.send("User not found");
      }
      try{
          if(await bcrypt.compare(password, users.password)){
            //   console.log(users)
              const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET)
              res.json({message:'user login', accessToken: accessToken})
            } else{
                res.send('incorrect password')
            }
        }catch{
            res.status(500).send()
        }
        
    } catch (error) {
      console.log(error);
      return res.sendStatus(500).send("Internal Error Server");
    }
  };

  export default loginUser;