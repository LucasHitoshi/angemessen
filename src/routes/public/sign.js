const path = require("path");
const express = require("express");
const signRouter = express.Router();
const whAuthRouter = express.Router();
const userModel = require("./../../database/models/user");
const authModel = require("./../../database/models/auth");
const { validatePassword, hashPassword } = require("./../../validation/password");
const { validateEmail, sendValidationEmail } = require("./../../validation/email");
const { generateValidationKey, generateValidationWebhook } = require("./../../validation/webhook");
const { isValidObjectId } = require("mongoose");

signRouter.post("/sign", async (req, res) => {
    try {
        console.log(`ROTA ACESSADA: '${req.route.path}'.`);

        if (!validateEmail(req.body.email)) {
            res.send("O email não é válido");
            return;
        }

        const emailAlreadyUsed = await userModel.findOne({ "email": req.body.email });

        if (emailAlreadyUsed !== null) {
            res.send("O email escolhido não está disponível");
            return;
        }

        if (!validatePassword(req.body.password, req.body.confirm_password)) {
            res.send("As senhas não batem ou não são válidas");
            return;
        }
        
        const newAuth = {
            key: generateValidationKey(),
            user_info: {
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                email: req.body.email,
                senha: hashPassword(req.body.password)
            }
        }

        const authResult = await authModel.create(newAuth);

        sendValidationEmail(
            req.body.email,
            generateValidationWebhook(authResult._id, authResult.key),
            { name: req.body.nome }
        );

        res.sendFile(path.join(__dirname, "../../..", "/public/login.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

whAuthRouter.get("/wh-auth/:id/:authKey", async (req, res, next) => {
    try {
        const _id = req.params.id;
        const authKey = req.params.authKey;
        
        if (!isValidObjectId(_id)) {
            console.log(`só us erru man ${_id}, ${authKey} ; 1`);
            res.sendFile(path.join(__dirname, "../../..", "/public/not-found.html"));
            return;
        }
        
        const authResult = await authModel.findOne({ "_id": _id });
        
        if (authResult === undefined || authResult === null) {
            console.log(`só us erru man ${_id}, ${authKey} ; 2 `);
            res.sendFile(path.join(__dirname, "../../..", "/public/not-found.html"));
            return;
        } else if (!(authResult.key === authKey)) {
            console.log(`só us erru man ${_id}, ${authKey} ; 3`);
            res.sendFile(path.join(__dirname, "../../..", "/public/not-found.html"));
            return;
        }

        const result = await userModel.create(authResult.user_info);

        res.json(result);

        // res.sendFile(path.join(__dirname, "../..", "/public/cadastro-conta.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

signRouter.use(whAuthRouter);

module.exports = signRouter;
