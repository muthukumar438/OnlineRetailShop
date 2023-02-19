"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptions = void 0;
class exceptions extends Error {
    constructor(statusCode, errorMessage) {
        super(errorMessage);
        this.statusCode = statusCode;
        this.errorMessage = errorMessage;
    }
}
exports.exceptions = exceptions;
//# sourceMappingURL=exceptions.js.map