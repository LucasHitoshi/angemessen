const path = require("path");
const express = require("express");
const productDescRouter = express.Router();

productDescRouter.get("/produto", (req, res) => {
    try {
        console.log("CRIE ACESSADA.");
        res.sendFile(path.join(__dirname, "../..", "/public/product-description.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = productDescRouter;
