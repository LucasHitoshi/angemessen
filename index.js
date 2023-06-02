const path = require("path");
const express = require("express");
const mainRouter = require("./src/routes/main");
const testRouter = require("./src/routes/test");
const createRouter = require("./src/routes/create");
const loginRouter = require("./src/routes/login");
const signRouter = require("./src/routes/sign");
const connection = require("./config/connection");
const produtosRouter = require("./src/routes/products");
const aboutUsRouter = require("./src/routes/aboutus");
const productDescRouter = require("./src/routes/product-description");
const notFoundRouter = require("./src/routes/404")
const app = require("./src/apps/app");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(mainRouter);
app.use(testRouter);
app.use(createRouter);
app.use(loginRouter);
app.use(signRouter);
app.use(produtosRouter);
app.use(aboutUsRouter);
app.use(productDescRouter);
app.use(notFoundRouter);

app.listen(port, () => {
    console.log(`SERVIDOR DE PÉ NA PORTA ${port}.\n`);
});
