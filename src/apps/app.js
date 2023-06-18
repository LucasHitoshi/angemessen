const express = require("express");
const appAPI = require("./app.api");
const appHTTP = require("./app.http");

const app = express();

app.use(appAPI);
app.use(appHTTP);

module.exports = app;
