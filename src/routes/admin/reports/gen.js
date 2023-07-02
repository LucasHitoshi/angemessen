const path = require("path");
const fs = require('fs');
const userModel = require("./../../../database/models/user");
const ballModel = require("./../../../database/models/ball");
const authModel = require("./../../../database/models/auth");

const getRegistersInfo = async () => {
    const registeredUsers = await authModel.find({ });
    const registeredUsersQtty = registeredUsers.length;

    return { registeredUsersQtty };
};

const getBallsInfo = async () => {
    const balls = await ballModel.find({ });
    const ballsQtty = balls.length;
    const ballsValue = balls.map(ball => ball.price.value.int);
    const totalBallsValue = ballsValue.reduce((total, currCart) => total + currCart, 0);
    const averageBallPrice = totalBallsValue / ballsQtty;

    return { ballsQtty, totalBallsValue, averageBallPrice };
};

const getUsersInfo = async () => {
    const users = await userModel.find({ });
    const usersQtty = users.length;
    const usersCartSize = users.map(user => user.cart.length );
    const totalItemsOnCart = usersCartSize.reduce((total, currCart) => total + currCart, 0);
    const averageCartSize = totalItemsOnCart / usersQtty;

    return { usersQtty, totalItemsOnCart, averageCartSize };
};

const genReportFile = (
    /** @type {string[]} */ data
) => {
    const reportCodeSalt = Math.floor(Math.random() * 899999) + 100000;
    const reportCodeDate = (new Date()).getDay();
    const reportCode = `${reportCodeDate}_${reportCodeSalt}`;
    const reportName = `report_${reportCode}.txt`;
    const reportPath = path.join(__dirname, `.txt/${reportName}`);
    
    try {
        fs.writeFile(reportPath, data, (err) => {
            if (err) throw err;
            console.log("UM RELATÓRIO FOI GERADO COM SUCESSO.");
        });
    } catch(_) {
        return false;
    }

    return true;
}

module.exports = { getBallsInfo, getRegistersInfo, getUsersInfo, genReportFile };
