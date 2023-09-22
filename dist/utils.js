"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirst = void 0;
const capitalizeFirst = (word) => {
    if (isNaN(parseInt(word))) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word.charAt(0) + ' ' + word.charAt(1).toUpperCase() + word.slice(2);
};
exports.capitalizeFirst = capitalizeFirst;
