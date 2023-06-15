const path = require("path");
const express = require("express");
const ballModel = require("../database/models/ball");
const { isValidObjectId } = require("mongoose");
const ballsApiRouter = express.Router();

ballsApiRouter.get("/api/balls", async (req, res) => {
    try {
        const _id = (
            req.query._id
                ? req.query._id.toString()
                : undefined);
        // const queries = req.query;
        // const ball = queries.ball_name;
        // const numberOfBalls = queries.ball_qtty
        //     // ? queries.ball_qtty
        //     // : 1;
        // const filters = queries.q
        //     ? queries.q
        //         .split(' ')
        //         .map(query => {
        //             return JSON.parse(`{"${query.replace('-', '":"')}"}`);
        //         })
        //     : undefined;
        
        // console.log(filters, numberOfBalls);

        // if (ball === "random") {
        //     const possibleBalls = await ballModel
        //         .find({ })
        //         // .limit(numberOfBalls)
        //         // .sort();
        //     // const randomBall = Math.floor(Math.random() * (possibleBalls.length));
        //     const result = possibleBalls//[randomBall];
        //     console.log(result)
        //     res.type("json");
        //     res.send(result);
        // } else {
        //     res.status(400);
        //     res.send({ "err": "400: Ball not found (Bad ball name)" });
        // }
        if (isValidObjectId(_id)) {
            const possibleBalls = await ballModel
                .find({ "_id": _id })
                // .limit(numberOfBalls)
                // .sort();
            // const randomBall = Math.floor(Math.random() * (possibleBalls.length));
            const result = possibleBalls//[randomBall];
            console.log(result)
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
