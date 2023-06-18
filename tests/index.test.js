require("dotenv").config({ "path": require("path").join(__dirname, "../..", ".env") });
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const validateEmail = (
    /** @type {string} */ email
) => {
    const local = email.split('@')[0];
    const domain = email.split('@')[1];
    
    if (!local || !domain) return false;
    if (email.replace(/[^@]/g, '').length !== 1) return false;
    if (local[0] === '.') return false;
    if (local[local.length - 1] === '.') return false;
    if (email.includes("..")) return false;

    return true;
}

const sendValidationEmail = (
    /** @type {string} */ email,
    /** @type {string} */ validationLink
) => {
    const transporter = nodemailer.createTransport(
        {
            service: "hotmail",
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        }
    )

    var message = {
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: 'Entre no jogo, entre na Angemessen!',
        text: validationLink
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Email de validação enviado: '${info.response}'`);
        }
    });
}

const main = () => {
    console.log("\nValidating email:\n");
    console.log(validateEmail("ronaldin..trollador@ultrahotmail.com"));
    console.log(validateEmail("lucasogawarec@gmail.com"));
    console.log(validateEmail("lucas_ogawa@estudante.sesisenai.org.br"));
    console.log(validateEmail("balls.angemessen@hotmail.com"));
    console.log(validateEmail(".env@node.com"));
    console.log(validateEmail("quem_conta_um_conto_aumenta_um_.@gmail.com"));
    
    console.log("\nValidating oid:\n");
    console.log(mongoose.isValidObjectId("ggutygcygnucnugy"));
    console.log(mongoose.isValidObjectId("648da07d3d5cbc5ab938ab6e"));
    console.log(mongoose.isValidObjectId("7ync356tbn4796tb5cn645nt"));
    // sendValidationEmail("lucasogawarec@gmail.com", "http://localhost:3000/homepage");
}

if (!module.parent) {
    main();
} else {
    module.exports = { validateEmail, sendValidationEmail };
}

/*

require("dotenv").config();
const path = require("path");
const express = require("express");
const queryStringParser = require('qs');
const mainRouter = require("./src/routes/main");
const testRouter = require("./src/routes/test");
const createRouter = require("./src/routes/create");
const loginRouter = require("./src/routes/login");
const signRouter = require("./src/routes/sign");
const connection = require("./config/connection");
const produtosRouter = require("./src/routes/products");
const aboutUsRouter = require("./src/routes/aboutus");
const productDescRouter = require("./src/routes/product-description");
const notFoundRouter = require("./src/routes/404");
const cartRouter = require("./src/routes/cart");
const ballsApiRouter = require("./src/api/balls");
const imagesApiRouter = require("./src/api/images");
const app = require("./src/apps/app");
const httpPort = process.env.HTTP_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.set("query parser", (str) => queryStringParser.parse(str));
app.use(mainRouter);
app.use(testRouter);
app.use(createRouter);
app.use(loginRouter);
app.use(signRouter);
app.use(produtosRouter);
app.use(aboutUsRouter);
app.use(productDescRouter);
app.use(cartRouter);
app.use(ballsApiRouter);
app.use(imagesApiRouter);
app.use(notFoundRouter);

app.listen(httpPort, () => {
    console.log(`SERVIDOR DE PÉ NA PORTA ${httpPort}.\n`);
});

*/
