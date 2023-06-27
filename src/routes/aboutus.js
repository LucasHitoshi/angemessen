const path = require("path");
const express = require("express");
const aboutUsRouter = express.Router();

aboutUsRouter.get("/sobre-nos", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../..", "/public/aboutus.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = aboutUsRouter;
