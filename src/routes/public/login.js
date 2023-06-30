const path = require("path");
const express = require("express");
const userModel = require("./../../database/models/user");
const { validatePassword, hashPassword } = require("./../../validation/password");
const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {
    try {
        if (req.session.email) {
            res.redirect("http://localhost:3000/perfil");
            return;
        }

        // console.log(`ROTA ACESSADA: '${req.route.path}'.`);
        // console.log(`Ver se o cara tá logado> ${req.session.email}`);
        res.sendFile(path.join(__dirname, "../../..", "/public/login.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
})

loginRouter.post("/send-login", async (req, res) => {
    try {
        if (req.session.email) {
            res.send("Tu já tá logadu doido");
            return;
        }

        const hashedPassword = hashPassword(req.body.password);

        // console.log(req.body.email);

        const result = await userModel.findOne({ email: req.body.email });

        if (!result) {
            res.send("Kkkkkk login errado troxa");
            return;
        }
        
        // console.log(result.senha, "\n", hashedPassword);
        if (result.senha === hashedPassword) {
            req.session.email = req.body.email;
            // console.log(req.session.email);
            res.send("Parabains vc logou");
        } else {
            res.send("Errou o login KKKKK nub");
        }
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

loginRouter.get("/logout", async (req, res) => {
    try {
        if (req.session.email) req.session.destroy();
        res.redirect("/homepage");
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = loginRouter;
