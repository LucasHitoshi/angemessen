require("dotenv").config({ path: require("path").join(__dirname, "../..", ".env") });
const crypto = require("crypto");

const generateValidationKey = ( /** @params {void} */ ) => {
    const authKey = crypto.randomBytes(64).toString("hex");
    return authKey;
}

const generateValidationWebhook = (
    /** @type {string} */ _id,
    /** @type {string} */ key
) => {
    const validationWebhook = `${process.env.DEV_ADDRESS}/wh-auth/${_id}/${key}`;
    return validationWebhook;
}

module.exports = { generateValidationKey, generateValidationWebhook };
