const express = require("express");
const userModel = require("./../../database/models/user");
const usersApiRouter = express.Router();

usersApiRouter.get("/api/user/session", async (req, res) => {
    try {
        if (!req.session.email) {
            res.status(400);
            res.send({ "err": "No open session to query user" });
            return;
        }

        // Pegamos tudo (menos a senha) do uuário e mandamos para o 'front'
        const result = await userModel.findOne({ email: req.session.email })
            .select("-senha");
        res.type("json");
        res.send(result);
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = usersApiRouter;
