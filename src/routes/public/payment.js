const path = require("path");
const express = require("express");
const paymentRouter = express.Router();

paymentRouter.get("/cadastrar-pagamento", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../../..", "/public/cadastro-pagamento.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

paymentRouter.post("/cadastrar-cartao", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../../..", "/public/cadastro-pagamento.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

paymentRouter.get("/complete-order", (req, res) => {
    try {
        res.redirect("/homepage");
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = paymentRouter;
