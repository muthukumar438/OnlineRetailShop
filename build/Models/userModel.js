"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});
const mUser = (0, mongoose_1.model)('iUser', userSchema);
exports.default = mUser;
//# sourceMappingURL=userModel.js.map