const path = require("path");
const express = require("express");
const reportRouter = express.Router();
const {
    getBallsInfo,
    getRegistersInfo,
    getUsersInfo,
    genReportFile
} = require(path.join(__dirname, "../..", "reports/gen"));

reportRouter.get("/relatory/generate", async (req, res) => {
    try {
        const authsData = await getRegistersInfo();
        const ballsData = await getBallsInfo();
        const usersData = await getUsersInfo();

        const result = {
            ...authsData,
            ...ballsData,
            ...usersData
        }
        
        var dataArray = [];
        
        for (const prop in result) {
            dataArray.push(`${prop}: ${result[prop]}`);
        }
        
        const parsedData = dataArray.join("\n");
        
        genReportFile(parsedData);
        
        res.send(parsedData);
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

reportRouter.get("/relatory/test/generate", async (req, res) => {
    try {
        console.log("TESTE DE CRIAÇÃO DE RELATÓRIOS EXECUTADO.");
        const data = "CONTEÚDO DE TESTE";
        genReportFile(data);
        res.send(data);
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = reportRouter;
