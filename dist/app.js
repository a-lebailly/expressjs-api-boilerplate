"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use('/', indexRoutes_1.default);
app.listen(PORT, () => {
    console.log('Server running at PORT:', PORT);
}).on('error', (error) => {
    console.log('Error: ', error.message);
    throw new Error(error.message);
});
