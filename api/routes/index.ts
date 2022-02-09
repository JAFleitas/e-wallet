//lo estoy usando para probar rutas pero no tiene nada necesario en este momento

const {Router} = require('express')
const { user } = require('../db/index')
import { Response, Request } from "express";
const axios = require('axios');

const router = Router();

const dbInfo = async() => {
    let search = await user.findAll()
    return search
}

router.get('/users', async(req:Request, res: Response) => {
        let users = await dbInfo();
        res.send(users)
    })

export default dbInfo;

module.exports = router ;