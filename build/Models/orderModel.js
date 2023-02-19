"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var orderSchema = new mongoose_1.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    productId: {
        type: String,
        required: true,
        unique: true
    },
    productName: {
        type: String,
        required: false,
        unique: true
    },
    orderQuantity: {
        type: Number,
        required: true,
        default: 1
    },
    productPrice: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: Boolean,
        required: true
    }
});
const mOrder = (0, mongoose_1.model)('iOrder', orderSchema);
exports.default = mOrder;
//# sourceMappingURL=orderModel.js.map