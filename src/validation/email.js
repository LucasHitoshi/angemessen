require("dotenv").config({ "path": require("path").join(__dirname, "../..", ".env") });
const nodemailer = require("nodemailer");

const validateEmail = (
    /** @type {string} */ email
) => {
    const local = email.split('@')[0];
    const domain = email.split('@')[1];

    if (!local || !domain) return false;
    if (email.replace(/[^@]/g, '').length !== email.length - 1) return false;
    if (email[0] === '.') return false;
    if (email[email.length - 1] === '.') return false;
    if (email.includes("..")) return false;
}

const sendValidationEmail = (
    /** @type {string} */ email,
    /** @type {string} */ validationLink
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
        subject: 'Entre no jogo, entre na Angemessen!',
        text: validationLink
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
    console.log(validateEmail("ronaldin..trollador@ultrahotmail.com"));
    console.log(validateEmail("lucasogawarec@gmail.com"));
    console.log(validateEmail("lucas_ogawa@estudante.sesisenai.org.br"));
    console.log(validateEmail("balls.angemessen@hotmail.com"));
    console.log(validateEmail(".env@node.com"));
    console.log(validateEmail("quem_conta_um_conto_aumenta_um_.@gmail.com"));

    // sendValidationEmail("lucasogawarec@gmail.com", "http://localhost:3000/homepage");
}

if (!module.parent) {
    main();
} else {
    module.exports = { validateEmail, sendValidationEmail };
}
