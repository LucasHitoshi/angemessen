const path = require("path");
const express = require("express");
const mainRouter = express.Router();


mainRouter.all("*", (req, res, next) => {
    try {
        console.log(`RECEBEMOS ISSO: '${Object.keys(req.body)}'.`);
    } catch (err) {
        console.log(`ERRO: ${err}`);
    } finally {
        next();
    }
});

mainRouter.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../..", "/public/index.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

mainRouter.get("/homepage", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../..", "/public/index.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});


module.exports = mainRouter;
