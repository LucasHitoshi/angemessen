const path = require("path");
const express = require("express");
const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {
    try {
        console.log(`ROTA ACESSADA: '${req.route.path}'.`);
        res.sendFile(path.join(__dirname, "../..", "/public/login.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
})

loginRouter.post("/send-login", (req, res) => {
    try {
        console.log("O USUÁRIO FEZ LOGIN OMAGA");
        console.log(`DON'S INFO: ${Object.values(req.body)}`);
        res.sendFile(path.join(__dirname, "../..", "/public/index.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = loginRouter;
