"use strict";
exports.__esModule = true;
exports.connect = void 0;
var mongoose = require("mongoose");
var PATH = process.env.DB_PATH || "";
var connect = function () {
    mongoose.connect(PATH);
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "db connection error"));
    db.once("open", function () { return console.info("connected to db", PATH); });
};
exports.connect = connect;
