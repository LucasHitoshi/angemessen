const path = require("path");
const express = require("express");
const userModel = require("../database/models/user");
const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {
    try {
        console.log(`ROTA ACESSADA: '${req.route.path}'.`);
        res.sendFile(path.join(__dirname, "../..", "/public/login.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
})

/*

        <!-- 
            {
                email: amil@g.com,
                password: 123,
            }
         -->
*/
loginRouter.post("/send-login", async (req, res) => {
    try {
        console.log("O USUÁRIO FEZ LOGIN OMAGA");
        console.log(`DON'S INFO: ${Object.values(req.body)}`);
        console.log(req.body.email, req.body.password);
        const result = await userModel.findOne({ email: req.body.email });
        if (result.password === req.body.password) {
            res.sendFile(path.join(__dirname, "../..", "/public/index.html"));
        }
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = loginRouter;
