"use strict";
exports.__esModule = true;
exports.api = void 0;
var express = require("express");
exports.api = express.Router();
var index_1 = require("./post/index");
exports.api.use("/post", new index_1.PostRouter().router);
