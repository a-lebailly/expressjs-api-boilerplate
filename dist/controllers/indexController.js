"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indexService_1 = __importDefault(require("../services/indexService"));
class IndexController {
    index(req, res) {
        res.status(200).json({
            message: indexService_1.default.sayHelloWorld(),
        });
    }
}
exports.default = new IndexController();
