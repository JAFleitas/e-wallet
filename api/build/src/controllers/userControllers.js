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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const { user } = require("../../db");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, username, email, password } = req.body;
        const passwordHash = yield bcrypt_1.default.hash(password, 10);
        const [newUser, created] = yield user.findOrCreate({
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
        if (newUser.username === username) {
            return res.send("Username is already used!");
        }
        return res.send("There is already a user with that email!");
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500).send("Internal Error Server");
    }
});
exports.default = createUser;
