const validatePassword = (
    /** @type {string} */ password,
    /** @type {string} */ confirmedPassword
) => {
    if (password.length < 6) return false;
    if (password === password.toLowerCase()) return false;
    if (password === password.toUpperCase()) return false;
    return password === confirmedPassword;
}

module.exports = validatePassword;
