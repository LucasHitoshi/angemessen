const express = require("express");
const path = require("path");
const ballsApiRouter = require(path.join(__dirname, "..", "routes/api/balls"));
const imagesApiRouter = require(path.join(__dirname, "..", "routes/api/images"));
const usersApiRouter = require(path.join(__dirname, "..", "routes/api/users"));
const plainImagesApiRouter = require(path.join(__dirname, "..", "routes/api/plain-image"));
const materialImagesApiRouter = require(path.join(__dirname, "..", "routes/api/material"));
const ticketValidationApiRouter = require(path.join(__dirname, "..", "routes/api/ticket"));

const appAPI = express();

appAPI.use(express.json());
appAPI.use(express.urlencoded({ extended: true }));
appAPI.use(express.static(path.join(__dirname, "../..", "/public")));
appAPI.set("query parser", (str) => queryStringParser.parse(str));
appAPI.use(ballsApiRouter);
appAPI.use(imagesApiRouter);
appAPI.use(usersApiRouter);
appAPI.use(plainImagesApiRouter);
appAPI.use(materialImagesApiRouter);
appAPI.use(ticketValidationApiRouter);

module.exports = appAPI;
