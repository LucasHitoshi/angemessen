const path = require("path");
const express = require("express");
const imagesApiRouter = express.Router();

imagesApiRouter.get("/api/images", (req, res) => {
    try {
        // TODO: Trocar o 'req.param' por algo bom de vdd
        const ball = req.query.ball_type;
        console.log(ball);
        const balls = {
            "basquete": "basketball.png",
            "bocha": "bocha.png",
            "volei": "volleyball.png",
            "golfe": "golf.png",
            "futebol": "mano-nerfado.png"
        }

        if (Object.keys(balls).includes(ball)) {
            const result = balls[ball];
            res.type("png");
            res.sendFile(path.join(__dirname, "../..", `/public/img/${result}`));
        } else if (ball === "random") {
            const possibleBalls = Object.values(balls);
            const randomBall = Math.floor(Math.random() * (possibleBalls.length));
            const result = possibleBalls[randomBall];
            res.sendFile(path.join(__dirname, "../..", `/public/img/${result}`));
        } else {
            res.status(400);
            res.send({ "err": "400: Ball not found (Bad ball name)" });
        }
        
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = imagesApiRouter;
