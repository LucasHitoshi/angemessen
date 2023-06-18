const express = require("express");
const path = require("path");
const ballsApiRouter = require(path.join(__dirname, "..", "api/balls"));
const imagesApiRouter = require(path.join(__dirname, "..", "api/images"));

const appAPI = express();

appAPI.use(express.json());
appAPI.use(express.urlencoded({ extended: true }));
appAPI.use(express.static(path.join(__dirname, "../..", "/public")));
appAPI.set("query parser", (str) => queryStringParser.parse(str));
appAPI.use(ballsApiRouter);
appAPI.use(imagesApiRouter);

module.exports = appAPI;
