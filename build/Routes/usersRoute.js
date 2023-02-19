"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const userController_1 = tslib_1.__importDefault(require("@/Controllers/userController"));
const userDto_1 = require("@/Dto/userDto");
const validationMiddleware_1 = tslib_1.__importDefault(require("@/Middlewares/validationMiddleware"));
class UserRoute {
    constructor() {
        this.path = '/users';
        this.router = (0, express_1.Router)();
        this.usersController = new userController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.usersController.getUsers);
        this.router.get(`${this.path}/:id`, this.usersController.getUserById);
        this.router.post(`${this.path}`, (0, validationMiddleware_1.default)(userDto_1.CreateDtoUser, 'body'), this.usersController.createUser);
        this.router.put(`${this.path}/:id`, (0, validationMiddleware_1.default)(userDto_1.CreateDtoUser, 'body', true), this.usersController.updateUser);
        this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
    }
}
exports.default = UserRoute;
//# sourceMappingURL=usersRoute.js.map