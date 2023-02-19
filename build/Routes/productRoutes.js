"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const productController_1 = tslib_1.__importDefault(require("@/Controllers/productController"));
const express_1 = require("express");
class RouteProduct {
    constructor() {
        this.path = "/products";
        this.router = (0, express_1.Router)();
        this.productController = new productController_1.default();
        this.startRoute();
    }
    startRoute() {
        this.router.get('${this.path}/', this.productController.getProducts);
        this.router.get('${this.path}/:id', this.productController.getProducts);
        this.router.post('${this.path}/:id:', this.productController.createProduct);
        this.router.put('${this.path}/:id', this.productController.updateProduct);
        this.router.delete('${this.path}/:id', this.productController.deleteProduct);
    }
}
exports.default = RouteProduct;
//# sourceMappingURL=productRoutes.js.map