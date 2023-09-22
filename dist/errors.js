"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.boomErrorHandler = exports.errorLogger = void 0;
const errorLogger = (error, req, res, next) => {
    console.error(error);
    next(error);
};
exports.errorLogger = errorLogger;
const boomErrorHandler = (error, req, res, next) => {
    if (error.isBoom === true) {
        const { output } = error;
        res.status(output.statusCode).json(output.payload);
    }
    else {
        next(error);
    }
};
exports.boomErrorHandler = boomErrorHandler;
const errorHandler = (error, req, res, next) => {
    res.status(500).json({ message: error.message, stack: error.stack });
};
exports.errorHandler = errorHandler;
