const path = require("path");
const express = require("express");
const materialImagesApiRouter = express.Router();

materialImagesApiRouter.get("/api/material_image", (req, res) => {
    try {
        // TODO: Trocar o 'req.param' por algo bom de vdd
        const material = req.query.material;
        console.log(material);
        const materials = {
            "couro": "couro.png",
            "borracha": "borracha.png",
            "eva": "eva.png",
        };

        if (Object.keys(materials).includes(material)) {
            const result = materials[material];
            console.log("aaa");
            res.type("png");
            res.sendFile(path.join(__dirname, "../..", `/public/img/${result}`));
        } else {
            res.status(400);
            res.send({ "err": "400: Ball not found (Bad ball name)" });
        }

        
        
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = materialImagesApiRouter;
