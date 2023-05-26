const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        nome: { type: String, required: true },
        email: { type: String, required: true },
        sobrenome: { type: String, required: true },
        password: { type: String, required: true }
    }
)

const userModel = model("userModel", userSchema);

module.exports = userModel;
