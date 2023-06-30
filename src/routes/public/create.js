const path = require("path");
const express = require("express");
const createRouter = express.Router();

createRouter.get("/crie", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../../..", "/public/create.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = createRouter;
