"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const indexController_1 = tslib_1.__importDefault(require("@/Controllers/indexController"));
class IndexRoute {
    constructor() {
        this.path = '/';
        this.router = (0, express_1.Router)();
        this.indexController = new indexController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.indexController.index);
    }
}
exports.default = IndexRoute;
//# sourceMappingURL=indexRoute.js.map