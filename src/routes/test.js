const path = require("path");
const express = require("express");
const { default: mongoose } = require("mongoose");
const testRouter = express.Router();
/** @type {mongoose.Model} */ const colorModel = require(path.join(__dirname, "..", "database/models/color"));
const data = require(path.join(__dirname, "..", "database/samples/dummy"));

testRouter.get("/test", async (req, res) => {
    try {
        console.log("CRUD EFETUADO.\n");
        const result = await colorModel.find({ });
        res.send(result);
    } catch (err) {
        console.log(`ERRO: ${err}\n`);
    }
});

testRouter.get("/test/insert/", async (req, res) => {
    try {
        console.log("CRUD EFETUADO.\n");
        const result = await colorModel.create(data);
        res.send(result);
    } catch (err) {
        console.log(`ERRO: ${err}\n`);
    }
});

testRouter.get("/test/:id", async (req, res) => {
    try {
        console.log("CRUD EFETUADO.\n");
        res.send(`${
            req.params.id
        }`);
    } catch (err) {
        console.log(`ERRO: ${err}\n`);
    }
});

module.exports = testRouter;
