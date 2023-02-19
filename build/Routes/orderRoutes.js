"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const orderController_1 = tslib_1.__importDefault(require("@/Controllers/orderController"));
const orderDto_1 = require("@/Dto/orderDto");
const validationMiddleware_1 = tslib_1.__importDefault(require("@/Middlewares/validationMiddleware"));
const express_1 = require("express");
class OrderRoute {
    constructor() {
        this.path = "/orders";
        this.router = (0, express_1.Router)();
        this.orderController = new orderController_1.default();
        this.startRoute();
    }
    startRoute() {
        this.router.get(`${this.path}`, this.orderController.getOrder);
        this.router.get(`${this.path}/:id`, this.orderController.getAllOrders);
        this.router.post(`${this.path}`, (0, validationMiddleware_1.default)(orderDto_1.CreateDtoOrder, 'body'), this.orderController.createOrder);
        this.router.put(`${this.path}`, (0, validationMiddleware_1.default)(orderDto_1.CreateDtoOrder, 'body', true), this.orderController.updateOrder);
        this.router.delete(`${this.path}/:id`, this.orderController.deleteOrder);
    }
}
exports.default = OrderRoute;
//# sourceMappingURL=orderRoutes.js.map