const path = require("path");
const express = require("express");
const notFoundRouter = express.Router();

// notFoundRouter.get("/404", (req, res) => {  
notFoundRouter.all("*", (req, res) => {
    try {
        console.log("CRIE ACESSADA.");
        res.status(404);
        res.sendFile(path.join(__dirname, "../..", "/public/not-found.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = notFoundRouter;
