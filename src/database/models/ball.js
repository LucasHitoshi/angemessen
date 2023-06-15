const { Schema, model } = require("mongoose");

const ballSchema = new Schema(
    {
        type: { type: String, required: true },
        material: { type: String, required: true },
        sport: { type: String, required: true },
        brand: { type: String, required: true },
        size: { type: String, required: true },
        complete: { type: Boolean },
        price: { type: String, required: true },
        image: { type: String, required: true },
        specifications: [
            { name: { type: String },
              desc: { type: String } }
        ]
    }
);

const ballModel = model("ballModel", ballSchema);

module.exports = ballModel;
