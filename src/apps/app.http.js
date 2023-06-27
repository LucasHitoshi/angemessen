const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../..", ".env") });
const express = require("express");
const mainRouter = require(path.join(__dirname, "..", "routes/main"));
const testRouter = require(path.join(__dirname, "..", "routes/test"));
const createRouter = require(path.join(__dirname, "..", "routes/create"));
const loginRouter = require(path.join(__dirname, "..", "routes/login"));
const signRouter = require(path.join(__dirname, "..", "routes/sign"));
const produtosRouter = require(path.join(__dirname, "..", "routes/products"));
const aboutUsRouter = require(path.join(__dirname, "..", "routes/aboutus"));
const productDescRouter = require(path.join(__dirname, "..", "routes/product-description"));
const cartRouter = require(path.join(__dirname, "..", "routes/cart"));
const profileRouter = require(path.join(__dirname, "..", "routes/profile"));
const notFoundRouter = require(path.join(__dirname, "..", "routes/404"));

const appHTTP = express();

appHTTP.use(express.json());
appHTTP.use(express.urlencoded({ extended: true }));
appHTTP.use(express.static(path.join(__dirname, "../..", "/public")));
appHTTP.set("query parser", (str) => queryStringParser.parse(str));
appHTTP.use(mainRouter);
appHTTP.use(testRouter);
appHTTP.use(createRouter);
appHTTP.use(loginRouter);
appHTTP.use(signRouter);
appHTTP.use(produtosRouter);
appHTTP.use(aboutUsRouter);
appHTTP.use(productDescRouter);
appHTTP.use(cartRouter);
appHTTP.use(profileRouter);
appHTTP.use(notFoundRouter);

module.exports = appHTTP;
