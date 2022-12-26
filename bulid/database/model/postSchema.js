"use strict";
exports.__esModule = true;
exports.Post = void 0;
var mongoose_1 = require("mongoose");
var postSchema = new mongoose_1["default"].Schema({
    title: String,
    message: String,
    creator: String,
    tag: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        "default": 0
    }
}, { timestamps: true });
exports.Post = mongoose_1["default"].model("post", postSchema);
