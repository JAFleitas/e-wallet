import { Response } from "express";
import { CreateAccount, elementFilter } from "../interface/createAccount";

const { user, account } = require("../../db");

const createAccounts = async (
  req: CreateAccount,
  res: Response
): Promise<Response> => {
  try {
    const { idUser, currency } = req.body;
    const userAccount = await user.findByPk(idUser, {
      include: [{ model: account, attributes: ["currency"] }],
    });

    if (userAccount?.accounts) {
      const trueAccount = userAccount.accounts.filter(
        (element: elementFilter) => element.currency === currency
      );
      if (trueAccount.length) {
        return res.send(`An ${currency} account already exist`);
      }
    }
    const newAccount = await account.create({ currency });
    await userAccount.addAccount(newAccount);

    return res.json("Account created successfully!");
  } catch (error) {
    console.log(error);
    return res.send("Internal Error Server");
  }
};

export default createAccounts;
