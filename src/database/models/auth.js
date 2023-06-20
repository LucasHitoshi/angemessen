const { Schema, model, default: mongoose } = require("mongoose");

const authSchema = new Schema(
    {
        // Não colocar o '_id', o Mongo insere automaticamente
        key: { type: String, required: true},
        user_info: {
            nome: { type: String, required: true },
            sobrenome: { type: String, required: true },
            email: { type: String, required: true },
            senha: { type: String, required: true }
        }
    }
);

const authModel = model("authModel", authSchema);

module.exports = authModel;
