const path = require("path");
const express = require("express");
const plainBallModel = require("./../../database/models/ball");
const { isValidObjectId } = require("mongoose");
const plainBallsApiRouter = express.Router();

plainBallsApiRouter.get("/api/plain-ball", async (req, res) => {
    try {
        const queries = req.query; // { limit: 5 }
        const ballsLimit = queries.limit ? queries.limit : 5; // { limit: 5 }
        // const ball = queries.ball_name;
        // const numberOfBalls = queries.ball_qtty
        //     // ? queries.ball_qtty
        //     // : 1;
        // const filters = queries.q
        //     ? queries.q
        //         .split(' ')
        //         .map(query => {config/connection.js.template
        //             return JSON.parse(`{"${query.replace('-', '":"')}"}`);
        //         })
        //     : undefined;
        
        // console.log(filters, numberOfBalls);

        // if (ball === "random") {
        //     const possibleBalls = await plainBallModel
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
        if (true) {
            const possibleBalls = await plainBallModel
                .find({ })
                .limit(ballsLimit)
                // .sort();
            const result = possibleBalls
            res.type("json");
            res.send(result);
        } else {
            res.status(400);
            res.send({ "err": "400: Ball(s) not found (Bad ball filters)" });
        }
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

plainBallsApiRouter.get("/api/plain_ball/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        
        if (isValidObjectId(_id)) {
            // cria a var; await; model.op();
            const result = await plainBallModel.findOne({ "_id": _id });
            res.type("json");
            res.send(result);
        } else {
            res.status(400);
            res.type("json");
            res.send({ "err": "400: Ball not found (Bad ball id)" });
        }
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = plainBallsApiRouter;
