const path = require("path");
const express = require("express");
const mainRouter = express.Router();


mainRouter.all("*", (req, res, next) => {
    try {
        if (!req.session.type) req.session.type = "guest";

        const reqUserType = req.session.type;
        const reqMethod = req.method.toLowerCase();
        const reqRoute = req.path;

        if (reqMethod === "get") console.log(`RECEBEMOS UM 'get' DE UM '${reqUserType}' EM '${reqRoute}'.`);
        else console.log(`RECEBEMOS UM '${reqMethod}' DE UM '${reqUserType}' COM ISSO: '${Object.keys(req.body)}'; EM '${reqRoute}'.`);
    } catch (err) {
        console.log(`ERRO: ${err}`);
    } finally {
        next();
    }
});

mainRouter.get("/", (req, res) => {
    try {
        res.redirect("/homepage");
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

mainRouter.get("/homepage", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../../..", "/public/index.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});


module.exports = mainRouter;
