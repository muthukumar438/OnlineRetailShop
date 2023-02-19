"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const compression_1 = tslib_1.__importDefault(require("compression"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_1 = tslib_1.__importDefault(require("express"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const hpp_1 = tslib_1.__importDefault(require("hpp"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const mongoose_1 = require("mongoose");
const swagger_jsdoc_1 = tslib_1.__importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = tslib_1.__importDefault(require("swagger-ui-express"));
const Config_1 = require("@/Config");
const database_1 = require("./Database/database");
const errorMiddleware_1 = tslib_1.__importDefault(require("./Middlewares/errorMiddleware"));
const logger_1 = require("@Utils/logger");
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.env = Config_1.NODE_ENV || 'development';
        this.port = Config_1.PORT || 3000;
        this.connectToDatabase();
        this.startMiddlewares();
        this.startRoutes(routes);
        this.startSwagger();
        this.startErrorHandling();
    }
    listen() {
        this.app.listen(this.port, () => {
            logger_1.logger.info(`ENV: ${this.env}`);
            logger_1.logger.info(`Retailshop app listening on the port ${this.port}`);
        });
    }
    getServer() {
        return this.app;
    }
    connectToDatabase() {
        if (this.env !== 'production') {
            (0, mongoose_1.set)('debug', true);
        }
        //connect(dbConnection.url, dbConnection.options);
        (0, mongoose_1.connect)(database_1.databaseConnection.url);
    }
    startMiddlewares() {
        this.app.use((0, morgan_1.default)(Config_1.LOG_FORMAT, { stream: logger_1.stream }));
        this.app.use((0, cors_1.default)({ origin: Config_1.ORIGIN, credentials: Config_1.STATUS }));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
    }
    startRoutes(routes) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }
    startSwagger() {
        const options = {
            swaggerDefinition: {
                info: {
                    title: 'REST API',
                    version: '1.0.0',
                    description: 'Example docs',
                },
            },
            apis: ['swagger.yaml'],
        };
        const specs = (0, swagger_jsdoc_1.default)(options);
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    }
    startErrorHandling() {
        this.app.use(errorMiddleware_1.default);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map