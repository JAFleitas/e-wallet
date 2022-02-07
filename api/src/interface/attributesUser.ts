import { Request } from "express";

interface AttributesUser {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface ReqCreateUser extends Request {
  body: AttributesUser;
}
