const express = require("express");
const session = require("express-session");
const appAPI = require("./app.api");
const appHTTP = require("./app.http");

const app = express();

app.use(session({
    secret: process.env.LOGIN_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(appAPI);
app.use(appHTTP);

module.exports = app;
