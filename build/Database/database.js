"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConnection = void 0;
const Config_1 = require("@/Config");
exports.databaseConnection = {
    //url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
    url: `mongodb+srv://${Config_1.DB_USERNAME}:${Config_1.DB_PASSWORD}@${Config_1.DB_CLUSTER}.rtbs2mc.mongodb.net/${Config_1.DB_DATABASE}?retryWrites=true&w=majority`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
};
//# sourceMappingURL=database.js.map