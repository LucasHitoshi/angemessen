const path = require("path");
const express = require("express");
const signRouter = express.Router();
const userModel = require("./../database/models/user");
const validatePassword = require("./../validation/password");
const { validateEmail, sendValidationEmail } = require("./../validation/email");

signRouter.post("/sign", async (req, res) => {
    try {
        console.log(`ROTA ACESSADA: '${req.route.path}'.`);

        if (!validatePassword(req.body.password, req.body.confirm_password)) {
            res.send("As senhas não batem ou não são válidas");
        }
        
        if (!validateEmail(req.body.email)) {
            res.send("O email não é válido");
        }

        sendValidationEmail(
            req.body.email,
            "localhost:3000/homepage",
            {
                "name": req.body.nome
            }
        );

        res.sendFile(path.join(__dirname, "../..", "/public/cadastro-conta.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = signRouter;
