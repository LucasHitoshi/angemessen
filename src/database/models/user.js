const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema(
    {
        // Não colocar o '_id', o Mongo insere automaticamente
        nome: { type: String, required: true },
        sobrenome: { type: String, required: true },
        email: { type: String, required: true },
        senha: { type: String, required: true },
        cpf: { type: String, /** required: false */ },
        endereco: {
            pais: { type: String, /** required: false */ },
            estado: { type: String, /** required: false */ },
            cidade: { type: String, /** required: false */ },
            bairro: { type: String, /** required: false */ },
            rua: { type: String, /** required: false */ },
            numero: { type: String, /** required: false */ },
            complemento: { type: String, /** required: false */ },
            cep: { type: String, /** required: false */ }
        },
        cart: [
            { ball_id: { type: mongoose.Types.ObjectId, required: true },
              qtty: { type: Number, require: true, default: 1 } }
        ],
        order: {
            payMethod: { type: String, /** required: false */ },
            tickets: [
                { ticket: { type: mongoose.Types.ObjectId, required: true } }
            ],
            balls: [
                { ball_id: { type: mongoose.Types.ObjectId, required: true },
                  qtty: { type: Number, require: true, default: 1 } }
            ]
        }
    }
);

const userModel = model("userModel", userSchema);

module.exports = userModel;

// enum: [ "Math", "English", "Computer Science", "History", null ];
// required: [ "nome", "sobrenome", "email", "senha" ];
// required: [ "pais", "estado", "cidade",  "bairro", "rua", "numero", "complemento", "cep" ];
