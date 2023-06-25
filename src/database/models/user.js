const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema(
    {
        nome: { type: String, required: true },
        sobrenome: { type: String, required: true },
        email: { type: String, required: true },
        senha: { type: String, required: true },
        cpf: { type: String, /** required: true */ },
        endereco: {
            pais: { type: String, /** required: true */ },
            estado: { type: String, /** required: true */ },
            cidade: { type: String, /** required: true */ },
            bairro: { type: String, /** required: true */ },
            rua: { type: String, /** required: true */ },
            numero: { type: String, /** required: true */ },
            complemento: { type: String, /** required: true */ },
            cep: { type: String, /** required: true */ }
        },
        cart: [
            { ball_id: { type: mongoose.Types.ObjectId, required: true },
              qtty: { type: Number, require: true, default: 1 } }
        ]
    }
)

const userModel = model("userModel", userSchema);

module.exports = userModel;

// enum: [ "Math", "English", "Computer Science", "History", null ];
// required: [ "nome", "sobrenome", "email", "senha" ];
// required: [ "pais", "estado", "cidade",  "bairro", "rua", "numero", "complemento", "cep" ];
