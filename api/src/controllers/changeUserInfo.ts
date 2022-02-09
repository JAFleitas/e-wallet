require('dotenv').config()
import { Response, } from "express";
import { ReqCreateUser } from "../interface/attributesUser";


const { user } = require("../../db");

const dbInfo = async() => {
    let search = await user.findAll()
    return search
}


const changeUserInfo = async (
    req: ReqCreateUser,
    res: Response,
  ) => {
    try {
    const { name, email, username, password, profilePic, lastname, birth } = req.body;
    let db = await dbInfo()
      const users = await db.find((x: { email: string; })=> x.email == email);
      if (users == null) {
        return res.send("Email needs to be passed in the body at the moment");
      }
      if(name){
        user.update(
          {name: name},
          {where: {email: email}}
        )
      }
      if(username){
        user.update(
          {username: username},
          {where: {email: email}}
        )
      }
      if(profilePic){
        user.update(
          {profilePic: profilePic},
          {where: {email: email}}
        )
      }
      if(lastname){
        user.update(
          {lastname: lastname},
          {where: {email: email}}
        )
      }
      if(birth){
        user.update(
          {birth: birth},
          {where: {email: email}}
        )
      }
      console.log(users)
      return res.send("Info updated")
      
        
    } catch (error) {
      console.log(error);
      return res.sendStatus(500).send("Internal Error Server");
    }
  };

  export default changeUserInfo;
