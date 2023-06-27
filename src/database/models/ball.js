const { Schema, model } = require("mongoose");

const ballSchema = new Schema(
    {
        // Não colocar o '_id', o Mongo insere automaticamente
        name: { type: String, required: true },
        description: { type: String, required: true },
        material: { type: String, required: true },
        sport: { type: String, required: true },
        brand: { type: String, required: true },
        size: { type: String, required: true },
        complete: { type: Boolean },
        view: {
            image: { type: String, required: true },
            planImage: { type: String, required: true }
        },
        avaliation: { type: Number, required: true },
        price: {
            sign: { type: String, required: true },
            value: {
                int: { type: Number, required: true },
                cent: { type: Number, required: true }
            }
        },
        specifications: [
            {
                name: { type: String },
                desc: { type: String }
            }
        ]
    }
);

const ballModel = model("ballModel", ballSchema);

module.exports = ballModel;
