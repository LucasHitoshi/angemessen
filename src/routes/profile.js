const path = require("path");
const express = require("express");
const profileRouter = express.Router();

profileRouter.get("/perfil", (req, res) => {
    try {
        if (!req.session.email) {
            res.redirect("/login");
        }
        
        res.sendFile(path.join(__dirname, "../..", "/public/profile.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = profileRouter;
