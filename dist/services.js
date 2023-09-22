"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVerse = exports.getChapter = exports.getBook = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const controller_1 = __importDefault(require("./controller"));
const utils_1 = require("./utils");
const getBook = (book) => {
    const db = (0, controller_1.default)(book);
    return {
        book: (0, utils_1.capitalizeFirst)(book),
        chapters: db.default.length - 1,
        text: db.default[0][0]
    };
};
exports.getBook = getBook;
const getChapter = (book, chapter) => {
    const db = (0, controller_1.default)(book);
    if (chapter < 1 || chapter > db.default.length - 1) {
        throw boom_1.default.notFound(`Chapter '${chapter}' out of range`);
    }
    return {
        book: (0, utils_1.capitalizeFirst)(book),
        chapter,
        verses: db.default[chapter].length,
        text: db.default[chapter]
    };
};
exports.getChapter = getChapter;
const getVerse = (book, chapter, verse) => {
    const db = (0, controller_1.default)(book);
    if (chapter < 1 || chapter > db.default.length - 1) {
        throw boom_1.default.notFound(`Chapter '${chapter}' out of range`);
    }
    else if (verse < 1 || verse > db.default[chapter].length - 1) {
        throw boom_1.default.notFound(`Verse '${verse}' out of range`);
    }
    return {
        book: (0, utils_1.capitalizeFirst)(book),
        chapter,
        verse,
        text: db.default[chapter][verse - 1]
    };
};
exports.getVerse = getVerse;
