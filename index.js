require("dotenv").config();
require("./config/connection");
const app = require("./src/apps/app");

const httpPort = process.env.HTTP_PORT;

app.listen(httpPort, () => {
    console.log(`SERVIDOR DE PÉ NA PORTA ${httpPort}.\n`);
});
