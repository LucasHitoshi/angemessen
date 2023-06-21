require("dotenv").config({ path: require("path").join(__dirname, "../..", ".env") });
const crypto = require("crypto");

const validatePassword = (
    /** @type {string} */ password,
    /** @type {string} */ confirmedPassword
) => {
    if (password.length < 6) return false;
    if (password === password.toLowerCase()) return false;
    if (password === password.toUpperCase()) return false;
    return password === confirmedPassword;
}

const hashPassword = (
    /** @type {string} */ password
) => {
    const hashSecret = process.env.HASH_SECRET;
    const hashResult = crypto.createHash("sha256", hashSecret)
        .update(password)
        .digest("hex");
    
    return hashResult;
}

module.exports = { validatePassword, hashPassword };
