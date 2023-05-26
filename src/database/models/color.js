const { Schema, model } = require("mongoose");

const colorSchema = new Schema(
    {
        hexCode: { type: String, required: true },
        RGBACode: { type: String, required: true },
    }
)

const colorModel = model("colorModel", colorSchema);

module.exports = colorModel;
