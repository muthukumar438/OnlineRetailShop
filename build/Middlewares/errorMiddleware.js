"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@/Utils/logger");
const errorMiddleware = (error, req, res, next) => {
    try {
        const status = error.statusCode || 500;
        const message = error.errorMessage || 'Something went wrong';
        logger_1.logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
        res.status(status).json({ message });
    }
    catch (error) {
        next(error);
    }
};
exports.default = errorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map