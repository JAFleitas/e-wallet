"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { user, account } = require("../../db");
const createAccounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idUser, currency } = req.body;
        const userAccount = yield user.findByPk(idUser, {
            include: [{ model: account, attributes: ["currency"] }],
        });
        if (userAccount === null || userAccount === void 0 ? void 0 : userAccount.accounts) {
            const trueAccount = userAccount.accounts.filter((element) => element.currency === currency);
            if (trueAccount.length) {
                return res.send(`An ${currency} account already exist`);
            }
        }
        const newAccount = yield account.create({ currency });
        yield userAccount.addAccount(newAccount);
        return res.json("Account created successfully!");
    }
    catch (error) {
        console.log(error);
        return res.send("Internal Error Server");
    }
});
exports.default = createAccounts;
