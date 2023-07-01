const path = require("path");
const express = require("express");
const plainImagesApiRouter = express.Router();

plainImagesApiRouter.get("/api/plain_image", (req, res) => {
    try {
        // TODO: Trocar o 'req.param' por algo bom de vdd
        const plainBall = req.query.ball_type;
        console.log(plainBall);
        const plainBalls = {
            "basquete": "basquete-planificado.svg",
            "futebol": "futebol-planificado.svg",
            "volei": "volei-planificado.svg"
        };

        if (Object.keys(plainBalls).includes(plainBall)) {
            const result = plainBalls[plainBall];
            res.type("svg");
            res.sendFile(path.join(__dirname, "../..", `/public/assets/${result}`));
        } else {
            res.status(400);
            res.send({ "err": "400: Ball not found (Bad ball name)" });
        }

        
        
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = plainImagesApiRouter;
