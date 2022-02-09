require('dotenv').config()
import { Response, Request } from "express";
const jwt = require('jsonwebtoken');

const authenticateToken = (
    req: Request,
    res: Response,
    next: Function
  ) => {
    try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any) =>{
        if(err) return res.sendStatus(403)
        next()
    })
        
    } catch (error) {
      console.log(error);
      return res.sendStatus(500).send("Internal Error Server");
    }
  };



export default authenticateToken;


