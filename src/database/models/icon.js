const { Schema, model } = require("mongoose");

const iconSchema = new Schema(
    {
        url: { type: String, required: true }
    }
)

const iconModel = model("iconModel", iconSchema);

module.exports = iconModel;
