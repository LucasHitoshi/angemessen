require("dotenv").config();
require("./config/connection");
const { app, appAdmin } = require("./src/apps/app");

const httpPort = process.env.HTTP_PORT;
const httpPortAdmin = 3500;  // TODO: Deshardcodar isso aqui

app.listen(httpPort, () => {
    console.log(`SERVIDOR DE PÉ NA PORTA ${httpPort}.\n`);
});

appAdmin.listen(httpPortAdmin, () => {
    console.log(`SIDE-END DE PÉ NA PORTA ${httpPortAdmin}.\n`);
})
