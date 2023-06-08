const path = require("path");
const express = require("express");
const ballModel = require("../database/models/ball");
const ballsApiRouter = express.Router();

ballsApiRouter.get("/api/balls", async (req, res) => {
    try {
        // TODO: Trocar o 'req.param' por algo bom de vdd
        const ball = req.param("ball_name");

        if (ball === "random") {
            const possibleBalls = await ballModel.find({ });
            const randomBall = Math.floor(Math.random() * (possibleBalls.length));
            const result = possibleBalls[randomBall];
            res.type("json");
            res.send(result);
        } else {
            res.status(400);
            res.send({ "err": "400: Ball not found (Bad ball name)" });
        }
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = ballsApiRouter;
