"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_1 = require("./services");
function router(app) {
    const router = (0, express_1.Router)();
    app.use('/api/v1/', router);
    router.get('/:book', (req, res) => {
        const book = req.params.book;
        const data = (0, services_1.getBook)(book);
        res.status(200).json(data);
    });
    router.get('/:book/:chapter', (req, res) => {
        const book = req.params.book;
        const chapter = parseInt(req.params.chapter);
        const data = (0, services_1.getChapter)(book, chapter);
        res.status(200).json(data);
    });
    router.get('/:book/:chapter/:verse', (req, res) => {
        const book = req.params.book;
        const chapter = parseInt(req.params.chapter);
        const verse = parseInt(req.params.verse);
        const data = (0, services_1.getVerse)(book, chapter, verse);
        res.status(200).json(data);
    });
}
exports.default = router;
