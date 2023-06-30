const path = require("path");
const express = require("express");
const mainRouter = express.Router();


mainRouter.all("*", (req, res, next) => {
    try {
        const reqMethod = req.method.toString();
        if (reqMethod === "GET") console.log("RECEBEMOS UMA REQUISIÇÃO 'GET'.");
        else console.log(`RECEBEMOS UM '${reqMethod}' COM ISSO: '${Object.keys(req.body)}'.`);
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
