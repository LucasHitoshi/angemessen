require("dotenv").config({ "path": require("path").join(__dirname, "../..", ".env") });
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const validateEmail = (
    /** @type {string} */ email
) => {
    const local = email.split('@')[0];
    const domain = email.split('@')[1];
    
    if (!local || !domain) return false;
    if (email.replace(/[^@]/g, '').length !== 1) return false;
    if (local[0] === '.') return false;
    if (local[local.length - 1] === '.') return false;
    if (email.includes("..")) return false;

    return true;
}

const sendValidationEmail = (
    /** @type {string} */ email,
    /** @type {string} */ validationLink,
    /** @type {object} */ emailContent
) => {
    const transporter = nodemailer.createTransport(
        {
            service: "hotmail",
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        }
    )

    var message = {
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: '(No reply) Entre no jogo, entre na Angemessen!',
        text: [
            `Que bom te ver aqui, ${emailContent.name}! Seja bem vindo(a) à Angemessen!`,
            `\n\n`,
            `Clique aqui para participar dessa Bolão: ${validationLink}`,
            `\n\n`,
            `Caso você não tenha tentado fazer cadastro na Angemessen, por favor ignore esse email.`,
            `\n\n`,
            `Com muito prazer,`,
            `\n`,
            `Angemessen Balls.`,
        ].join('')
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Email de validação enviado: '${info.response}'`);
        }
    });
}

const main = () => {
    console.log("\nValidating email:\n");
    console.log(validateEmail("ronaldin..trollador@ultrahotmail.com"));
    console.log(validateEmail("lucasogawarec@gmail.com"));
    console.log(validateEmail("lucas_ogawa@estudante.sesisenai.org.br"));
    console.log(validateEmail("balls.angemessen@hotmail.com"));
    console.log(validateEmail(".env@node.com"));
    console.log(validateEmail("quem_conta_um_conto_aumenta_um_.@gmail.com"));
    
    console.log("\nValidating oid:\n");
    console.log(mongoose.isValidObjectId("ggutygcygnucnugy"));
    console.log(mongoose.isValidObjectId("648da07d3d5cbc5ab938ab6e"));
    console.log(mongoose.isValidObjectId("7ync356tbn4796tb5cn645nt"));
    // sendValidationEmail("lucasogawarec@gmail.com", "http://localhost:3000/homepage");
}

if (!module.parent) {
    main();
} else {
    module.exports = { validateEmail, sendValidationEmail };
}
