import { Request } from "express";

interface AttributesUser {
  name?: string;
  lastname?: string;
  username: string;
  email: string;
  password: string;
  phone?: string;
  birth?: string;
  dni?: string;
  profilePic?: string;
}

export interface ReqCreateUser extends Request {
  body: AttributesUser;
}
