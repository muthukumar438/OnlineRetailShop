"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_FORMAT = exports.LOG_DIR = exports.SECRET_KEY = exports.ORIGIN = exports.DB_DATABASE = exports.DB_CLUSTER = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_PORT = exports.DB_HOST = exports.PORT = exports.NODE_ENV = exports.STATUS = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });
exports.STATUS = process.env.STATUS === 'true';
_a = process.env, exports.NODE_ENV = _a.NODE_ENV, exports.PORT = _a.PORT, exports.DB_HOST = _a.DB_HOST, exports.DB_PORT = _a.DB_PORT, exports.DB_USERNAME = _a.DB_USERNAME, exports.DB_PASSWORD = _a.DB_PASSWORD, exports.DB_CLUSTER = _a.DB_CLUSTER, exports.DB_DATABASE = _a.DB_DATABASE, exports.ORIGIN = _a.ORIGIN, exports.SECRET_KEY = _a.SECRET_KEY, exports.LOG_DIR = _a.LOG_DIR, exports.LOG_FORMAT = _a.LOG_FORMAT;
//# sourceMappingURL=index.js.map