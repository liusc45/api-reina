"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const router_1 = __importDefault(require("./router"));
const errors_1 = require("./errors");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
(0, router_1.default)(app);
app.use(errors_1.errorLogger);
app.use(errors_1.boomErrorHandler);
app.use(errors_1.errorHandler);
app.listen(PORT, () => {
    console.log(`[server] Running API on http://localhost:${PORT}`);
});
