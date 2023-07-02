const express = require("express");
const path = require("path");
const reportRouter = require(path.join(__dirname, "..", "routes/admin/report"));

const appAdmin = express();

appAdmin.use(express.json());
appAdmin.use(express.urlencoded({ extended: true }));
// appAdmin.use(express.static(path.join(__dirname, "../..", "/public")));
appAdmin.set("query parser", (str) => queryStringParser.parse(str));
appAdmin.use(reportRouter);

module.exports = appAdmin;
