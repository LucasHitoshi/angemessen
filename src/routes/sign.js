const path = require("path");
const express = require("express");
const signRouter = express.Router();
const userModel = require("./../database/models/user");

const validatePassword = (
    /** @type {string} */ password,
    /** @type {string} */ confirmedPassword
) => {
    if (password.length < 6) return false;
    if (password === password.toLowerCase()) return false;
    if (password === password.toUpperCase()) return false;
    return password === confirmedPassword;
}

signRouter.post("/sign", async (req, res) => {
    try {
        console.log(`ROTA ACESSADA: '${req.route.path}'.`);

        if (validatePassword(req.body.password, req.body.confirm_password)) {
            var result = await userModel.create(req.body);
            console.log("SUCESSO");
        }

        res.sendFile(path.join(__dirname, "../..", "/public/cadastro-conta.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = signRouter;



"MANo" === "MANo".toLocaleLowerCase(); // false
"MANo" === "MANo".toLocaleUpperCase(); // false




