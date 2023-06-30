"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var http = require("http");
var busboy = require("connect-busboy");
var busboyBodyParser = require("busboy-body-parser");
var compression = require("compression");
var db_1 = require("./database/db");
var api_1 = require("./routes/api");
var dotenv = require("dotenv");
try {
    var app = express();
    //middleware
    app.use(cors());
    app.use(busboy());
    app.use(busboyBodyParser());
    //parser for post data
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    //for gzipping
    app.use(compression());
    // api route
    app.use("/api", api_1.api);
    // connected to mongodb
    dotenv.config();
    (0, db_1.connect)();
    app.get("*", function (req, res) {
        res.send("wrong route");
    });
    var port_1 = process.env.PORT || 8080;
    app.set("port", port_1);
    var server = http.createServer(app);
    server.listen(port_1, function () { return console.info("Api running on localhost:".concat(port_1)); });
    module.exports = app;
}
catch (error) {
    process.exit(1);
}
