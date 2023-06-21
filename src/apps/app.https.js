const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const mainRouter = require(path.join(__dirname, "..", "routes/main"));
const testRouter = require(path.join(__dirname, "..", "routes/test"));
const createRouter = require(path.join(__dirname, "..", "routes/create"));
const loginRouter = require(path.join(__dirname, "..", "routes/login"));
const signRouter = require(path.join(__dirname, "..", "routes/sign"));
const produtosRouter = require(path.join(__dirname, "..", "routes/products"));
const aboutUsRouter = require(path.join(__dirname, "..", "routes/aboutus"));
const productDescRouter = require(path.join(__dirname, "..", "routes/product-description"));
const cartRouter = require(path.join(__dirname, "..", "routes/cart"));
const notFoundRouter = require(path.join(__dirname, "..", "routes/404"));

const appHTTPS = express();

appHTTPS.use(express.json());
appHTTPS.use(express.urlencoded({ extended: true }));
appHTTPS.use(express.static(path.join(__dirname, "../..", "/public")));
appHTTPS.set("query parser", (str) => queryStringParser.parse(str));
appHTTPS.use(mainRouter);
appHTTPS.use(testRouter);
appHTTPS.use(createRouter);
appHTTPS.use(loginRouter);
appHTTPS.use(signRouter);
appHTTPS.use(produtosRouter);
appHTTPS.use(aboutUsRouter);
appHTTPS.use(productDescRouter);
appHTTPS.use(cartRouter);
appHTTPS.use(notFoundRouter);

const options = {
    "key": fs.readFileSync(path.join(__dirname, "..", "ssl/keys/TODO.key")),
    "cert": fs.readFileSync(path.join(__dirname, "..", "ssl/TODO.csr")),
};

module.exports = https.createServer(options, appHTTPS);
