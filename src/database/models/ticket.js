const { Schema, model, default: mongoose } = require("mongoose");

const ticketSchema = new Schema(
    {
        // Não colocar o '_id', o Mongo insere automaticamente
        code: { type: String, required: true},
        promo: {
            type: { type: String, required: true },
            value: { type: Number, required: true }
        }
    }
);

const ticketModel = model("ticketModel", ticketSchema);

module.exports = ticketModel;
