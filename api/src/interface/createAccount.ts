import { Request } from "express";

export interface CreateAccount extends Request {
  body: { idUser: string; currency: string };
}
export type elementFilter = { currency: string };
