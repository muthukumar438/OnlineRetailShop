"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("@/app"));
const usersRoute_1 = tslib_1.__importDefault(require("@Routes/usersRoute"));
const indexRoute_1 = tslib_1.__importDefault(require("@Routes/indexRoute"));
const validateEnv_1 = tslib_1.__importDefault(require("@Utils/validateEnv"));
const orderRoutes_1 = tslib_1.__importDefault(require("@Routes/orderRoutes"));
const productRoutes_1 = tslib_1.__importDefault(require("@Routes/productRoutes"));
const authRoute_1 = tslib_1.__importDefault(require("@Routes/authRoute"));
(0, validateEnv_1.default)();
const app = new app_1.default([new indexRoute_1.default(), new usersRoute_1.default(), new productRoutes_1.default(), new orderRoutes_1.default(), new authRoute_1.default()]);
app.listen();
//# sourceMappingURL=server.js.map