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
        if (!validateEmail(req.body.email)) {
            res.redirect("/cadastro-conta.html?err_email=true");
            return;
        }
        
        const emailAlreadyUsed = await userModel.findOne({ "email": req.body.email });
        
        if (emailAlreadyUsed !== null) {
            res.redirect("/cadastro-conta.html?err_email=true");
            return;
        }
        
        if (!validatePassword(req.body.password, req.body.confirm_password)) {
            res.redirect("/cadastro-conta.html?err_pw=true");
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

whAuthRouter.get("/wh-auth/:id/:authKey", async (req, res) => {
    try {
        const _id = req.params.id;
        const authKey = req.params.authKey;
        
        if (!isValidObjectId(_id)) {
            res.sendFile(path.join(__dirname, "../../..", "/public/not-found.html"));
            return;
        }
        
        const authResult = await authModel.findOne({ "_id": _id });
        
        if (authResult === undefined || authResult === null) {
            res.sendFile(path.join(__dirname, "../../..", "/public/not-found.html"));
            return;
        } else if (!(authResult.key === authKey)) {
            res.sendFile(path.join(__dirname, "../../..", "/public/not-found.html"));
            return;
        }

        await userModel.create(authResult.user_info);

        res.redirect("/homepage?sign=true");
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

signRouter.use(whAuthRouter);

module.exports = signRouter;
