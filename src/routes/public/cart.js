const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const path = require("path");
const express = require("express");
const userModel = require("./../../database/models/user");
const ballModel = require("./../../database/models/ball");
const cartRouter = express.Router();

cartRouter.get("/carrinho", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../../..", "/public/carrinho.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

cartRouter.get("/add-to-cart/:id", async (req, res) => {
    try {
        if (req.session.email) {
            const user = await userModel.findOne({ email: req.session.email });
            const result = await userModel.findOneAndUpdate
                ( { email: req.session.email },
                  { cart: [ { ball_id: req.params.id } ] } );
            req.session.cart = result.cart;
        }

        res.redirect("/carrinho");
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

cartRouter.get("/cart/balls", async (req, res) => {
    try {
        if (req.session.email) {
            // Junta as bolas do carrinho de sessão às registradas no mongo
            const sessionCart = req.session.cart ? req.session.cart : [];
            req.session.cart = [];
            const user = await userModel.findOne({ email: req.session.email });
            var cart = [...user.cart, ...sessionCart];
            await userModel.updateOne
                ( { email: req.session.email },
                  { cart: cart } );
        } else {
            var cart = req.session.cart ? req.session.cart : [];
        }

        const cartBalls = [];

        for (const ball of cart) {
            const currBall = await ballModel.findOne({ "_id": ball.ball_id });
            cartBalls.push({ ...currBall._doc, qtty: ball.qtty });
        }

        res.type("json");
        res.send(cartBalls);
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

cartRouter.get("/validate-cep", async (req, res) => {
    try {
        var cep = req.query.cep;
        while (/[\s|-]/.test(cep)) cep = cep.replace(/(\s|-)/, "");
        const apiFetchURL = `http://viacep.com.br/ws/${cep}/json/`;
        const fetchOptions = { method: "GET" };
        const fetchResult = await fetch(apiFetchURL, fetchOptions)
        const cepIsValid = fetchResult.statusText === "OK";
        const textResult = await fetchResult.text();

        if (cepIsValid) {
            var parsedCepInfo = JSON.parse(textResult);
            if (req.session.email)
                await userModel.findOneAndUpdate
                    ( { email: req.session.email },
                      { endereco: { cep: cep } } );
        } else {
            var parsedCepInfo = { };
        }

        const result = { isValid: cepIsValid, cepInfo: parsedCepInfo };

        res.type("json");
        res.send(result);
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

cartRouter.get("/validate-payment", async (req, res) => {
    try {
        var paymentMethod = req.query.payment;

        if (req.session.email) {
            const result = await userModel.findOneAndUpdate
                ( { email: req.session.email },
                  { order: { payMethod: paymentMethod } } );
            if (paymentMethod === "card")
                res.redirect("/cadastrar-pagamento");
            else
                res.redirect("/carrinho");
        } else {
            res.redirect("/login");
        }
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = cartRouter;
