const { Schema, model } = require("mongoose");

const ballSchema = new Schema(
    {
        tipo: { type: String, required: true },
        composicao: { type: String, required: true },
        tamanho: { type: String, required: true },
        pronta: { type: String },
        preco: { type: String, required: true },
        imagem: { type: String, required: true }
    }
)

const ballModel = model("ballModel", ballSchema);

module.exports = ballModel;
