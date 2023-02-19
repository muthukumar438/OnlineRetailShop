"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const authController_1 = tslib_1.__importDefault(require("@/Controllers/authController"));
const userDto_1 = require("@/Dto/userDto");
const authMiddleware_1 = tslib_1.__importDefault(require("@/Middlewares/authMiddleware"));
const validationMiddleware_1 = tslib_1.__importDefault(require("@/Middlewares/validationMiddleware"));
class AuthenticateRoute {
    constructor() {
        this.path = '/';
        this.router = (0, express_1.Router)();
        this.authController = new authController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}signup`, (0, validationMiddleware_1.default)(userDto_1.CreateDtoUser, 'body'), this.authController.signUp);
        this.router.post(`${this.path}login`, (0, validationMiddleware_1.default)(userDto_1.CreateDtoUser, 'body'), this.authController.logIn);
        this.router.post(`${this.path}logout`, authMiddleware_1.default, this.authController.logOut);
    }
}
exports.default = AuthenticateRoute;
//# sourceMappingURL=authRoute.js.map