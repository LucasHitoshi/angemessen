const path = require("path");
const express = require("express");
const ticketModel = require("../../database/models/ticket");
const ticketValidationApiRouter = express.Router();


ticketValidationApiRouter.get("/api/validate-ticket", async (req, res) => {
    try {
        const ticket = req.query.ticket;
        console.log(ticket);
        const tickets = await ticketModel.find({ });
        const ticketNames = tickets.map( ticket => ticket.code );
        console.log(tickets)

        if (ticketNames.includes(ticket)) {
            const result = { ticketIsValid: true, ...tickets[ticket] };
            res.type("json");
            res.status(200);
            res.send(result);
        } else {
            const result = { ticketIsValid: false };
            res.status(400);
            res.send(result);
        }
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = ticketValidationApiRouter;
