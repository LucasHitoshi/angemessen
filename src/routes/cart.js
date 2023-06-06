const path = require("path");
const express = require("express");
const cartRouter = express.Router();

cartRouter.get("/carrinho", (req, res) => {
    try {
        console.log("CRIE ACESSADA.");
        res.sendFile(path.join(__dirname, "../..", "/public/carrinho.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = cartRouter;
