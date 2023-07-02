const express = require("express");
const { getBallsInfo, getRegistersInfo, getUsersInfo, genReportFile } = require("./reports/gen");
const reportRouter = express.Router();

reportRouter.get("/relatory/generate", async (req, res) => {
    try {
        const authsData = await getRegistersInfo();
        const ballsData = await getBallsInfo();
        const usersData = await getUsersInfo();

        console.log("a");
        const result = {
            ...authsData,
            ...ballsData,
            ...usersData
        }
        
        console.log("a");
        var data = [];
        
        for (const prop in result) {
            data.push(`${prop}: ${result[prop]}`);
        }
        console.log("a");
        
        const parsedData = data.join("\n");
        console.log("a");
        
        genReportFile(parsedData);
        console.log("a");
        
        res.send(parsedData);
        console.log("a");
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

reportRouter.get("/relatory/test/generate", async (req, res) => {
    try {
        console.log("TESTE DE CRIAÇÃO DE RELATÓRIOS.");
        const data = "ain nobruzera";
        genReportFile(data);
        res.send(data);
    } catch (err) {
        console.log(`ERRO: ${err}`);
    }
});

module.exports = reportRouter;
