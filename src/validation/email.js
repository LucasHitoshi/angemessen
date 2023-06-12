const nodemailer = require("nodemailer");

const validateEmail = (
    /** @type {string} */ email
) => {
    if (!email.includes('@')) return false;
    if (email.split('@').length !== 2) return false;


    // if (password.length < 6) return false;
    // if (password === password.toLowerCase()) return false;
    // if (password === password.toUpperCase()) return false;
    // return password === confirmedPassword;
}

const sendValidationEmail = (
    /** @type {string} */ email,
    /** @type {string} */ validationLink
) => {
    const transporter = nodemailer.createTransport(
        {
            service: "gmail",
            auth: {
                user: "angemessen@gmail.com",
                pass: "OKzUv3ZR9DxrS2rljDRRrSws1CbkRY5vB7m8cQutTbuHkiREtk"
            }
        }
    )

    var message = {
        from: 'angemessen@gmail.com',
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

sendValidationEmail("lucasogawarec@gmail.com", "http://localhost:3000/homepage");

// module.exports = { validatePassword, sendValidationEmail };

// 183802051844-2boa0fsrdler6s850idnmem5ecv0tu9k.apps.googleusercontent.com
// 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