const express = require("express");
const path = require("path");
const ballsApiRouter = require(path.join(__dirname, "..", "api/balls"));
const imagesApiRouter = require(path.join(__dirname, "..", "api/images"));
const usersApiRouter = require(path.join(__dirname, "..", "api/users"));
const plainImagesApiRouter = require(path.join(__dirname, "..", "api/plain-image"));

const appAPI = express();

appAPI.use(express.json());
appAPI.use(express.urlencoded({ extended: true }));
appAPI.use(express.static(path.join(__dirname, "../..", "/public")));
appAPI.set("query parser", (str) => queryStringParser.parse(str));
appAPI.use(ballsApiRouter);
appAPI.use(imagesApiRouter);
appAPI.use(usersApiRouter);
appAPI.use(plainImagesApiRouter);

module.exports = appAPI;
