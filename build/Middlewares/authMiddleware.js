"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = require("jsonwebtoken");
const Config_1 = require("@/Config");
const exceptions_1 = require("@/Exceptions/exceptions");
const userModel_1 = tslib_1.__importDefault(require("@/Models/userModel"));
const authMiddleware = async (req, res, next) => {
    try {
        const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);
        if (Authorization) {
            const secretKey = Config_1.SECRET_KEY;
            const verificationResponse = (await (0, jsonwebtoken_1.verify)(Authorization, secretKey));
            const userId = verificationResponse._id;
            const findUser = await userModel_1.default.findById(userId);
            if (findUser) {
                req.user = findUser;
                next();
            }
            else {
                next(new exceptions_1.exceptions(401, 'Wrong authentication token'));
            }
        }
        else {
            next(new exceptions_1.exceptions(404, 'Authentication token missing'));
        }
    }
    catch (error) {
        next(new exceptions_1.exceptions(401, 'Wrong authentication token'));
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map