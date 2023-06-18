require("dotenv").config({ "path": require("path").join(__dirname, "..", ".env") });
const mongoose = require("mongoose");
const { exit } = require("process");
const connectionString = process.env.MONGO_CONNECTION_STRING;

try {
    mongoose.connect(connectionString);
} catch (error) {
    console.log(error);
    console.log("\nPlease, check if your '.env' file is configured correctly\n");
    exit(1);
}

mongoose.connection.once("open", () => {
    console.log("CONECTADO AO MONGO COM SUCESSO.\n");
})

module.exports = mongoose.connection;
