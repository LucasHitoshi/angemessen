const path = require("path");
const express = require("express");
const userModel = require("../database/models/user");
const ballModel = require("../database/models/ball");
const cartRouter = express.Router();

cartRouter.get("/carrinho", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../..", "/public/carrinho.html"));
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

cartRouter.get("/add-to-cart/:id", async (req, res) => {
    try {
        req.session.cart = req.session.cart
            ? [...req.session.cart, { ball_id: req.params.id, qtty: 1 }]
            : [{ ball_id: req.params.id, qtty: 1 }];
        
        if (req.session.email) {
            const user = await userModel.findOne({ email: req.session.email });
            const result = await userModel.findOneAndUpdate
                ( { email: req.session.email },
                  { cart: [ ...user.cart, { ball_id: req.params.id } ] } );
            req.session.cart = result.cart;
        }

        res.send(req.session.cart);
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
            // console.log(
            //     req.session.email,
            //     sessionCart,
            //     req.session.cart,
            //     user,
            //     cart
            // );
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

module.exports = cartRouter;
