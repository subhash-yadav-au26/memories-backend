"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PostRoutes = void 0;
var code = require("http-status");
var helper_1 = require("./helper");
var mongoose = require("mongoose");
var PostRoutes = /** @class */ (function () {
    function PostRoutes() {
    }
    var _a;
    _a = PostRoutes;
    PostRoutes.get = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var postData, error_1;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, helper_1.PostHelpers.findAll()];
                case 1:
                    postData = _b.sent();
                    res.status(code.OK).json({ message: postData });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    res.status(500).json({ message: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    PostRoutes.getOne = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var id, postData, error_2;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    if (!mongoose.Types.ObjectId.isValid(id)) {
                        return [2 /*return*/, res.status(404).json({ message: "No post with id :".concat(id) })];
                    }
                    return [4 /*yield*/, helper_1.PostHelpers.findOne(id)];
                case 1:
                    postData = _b.sent();
                    res.status(code.OK).json({ message: postData });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    res.status(500).json({ message: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    PostRoutes.post = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var resBody, resData, error_3;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    resBody = req.body;
                    return [4 /*yield*/, helper_1.PostHelpers.create(resBody)];
                case 1:
                    resData = _b.sent();
                    res.status(code.OK).json({ message: resData });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    res.status(500).json({ message: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    PostRoutes["delete"] = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var id, error_4;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    if (!mongoose.Types.ObjectId.isValid(id)) {
                        return [2 /*return*/, res.status(404).json({ message: "No post with id :".concat(id) })];
                    }
                    return [4 /*yield*/, helper_1.PostHelpers.findByIdAndDelete(id)];
                case 1:
                    _b.sent();
                    res.status(code.OK).json({ message: "post deleted successfully" });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _b.sent();
                    res.status(500).json({ message: error_4.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    PostRoutes.put = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var id, resBody, error_5;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    resBody = req.body;
                    if (!mongoose.Types.ObjectId.isValid(id)) {
                        return [2 /*return*/, res.status(404).json({ message: "No post with id :".concat(id) })];
                    }
                    return [4 /*yield*/, helper_1.PostHelpers.findByIDAndUpdate(id, resBody)];
                case 1:
                    _b.sent();
                    res.status(code.OK).json({ message: "post updated successfully" });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _b.sent();
                    res.status(500).json({ message: error_5.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    PostRoutes.updatelike = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var id;
        return __generator(_a, function (_b) {
            try {
                id = req.params.id;
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return [2 /*return*/, res.status(404).json({ message: "No post with id :".concat(id) })];
                }
                res.status(code.OK).json({ message: "post like updated successfully" });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
            return [2 /*return*/];
        });
    }); };
    return PostRoutes;
}());
exports.PostRoutes = PostRoutes;
