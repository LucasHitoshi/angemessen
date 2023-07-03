const path = require("path");
const express = require("express");
const userModel = require("./../../database/models/user");
const { validatePassword, hashPassword } = require("./../../validation/password");
const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {
    try {
        if (req.session.email) {
            res.redirect("/perfil");
        } else {
            res.sendFile(path.join(__dirname, "../../..", "/public/login.html"));
        }
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
})

loginRouter.post("/send-login", async (req, res) => {
    try {
        if (req.session.email) {
            res.redirect("/perfil");
            return;
        }

        const result = await userModel.findOne({ email: req.body.email });
        
        if (!result) {
            res.redirect("/login?err=true");
            return;
        }

        const hashedPassword = hashPassword(req.body.password);
        
        if (result.senha === hashedPassword) {
            req.session.email = req.body.email;
            req.session.type = "user";
            res.redirect("/login/success");
        } else {
            res.redirect("/login?err=true");
        }
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

loginRouter.get("/login/success", async (req, res) => {
    try {
        if (req.session.email) res.sendFile(path.join(__dirname, "../../..", "/public/redirect-login.html"));
        else res.redirect("/login");
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

loginRouter.get("/logout", async (req, res) => {
    try {
        if (req.session.email) req.session.destroy();
        res.redirect("/homepage?logout=true");
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = loginRouter;
