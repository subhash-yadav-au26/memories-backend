"use strict";
exports.__esModule = true;
exports.PostRouter = void 0;
var express = require("express");
var routes_1 = require("./routes");
var PostRouter = /** @class */ (function () {
    function PostRouter() {
        this.router = express.Router();
        this.router.get("/", routes_1.PostRoutes.get);
        this.router.post("/", routes_1.PostRoutes.post);
        this.router.get("/:id", routes_1.PostRoutes.getOne);
        this.router.put("/:id", routes_1.PostRoutes.put);
        this.router["delete"]("/:id", routes_1.PostRoutes["delete"]);
        this.router.put("/:id/likePost", routes_1.PostRoutes.updatelike);
    }
    return PostRouter;
}());
exports.PostRouter = PostRouter;
