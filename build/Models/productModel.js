"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    productName: {
        type: String,
        required: false
    },
    productPrice: {
        type: Number,
        required: true
    },
    quantityAvailable: {
        type: Number,
        required: true,
        default: 0
    },
    productStatus: {
        type: Boolean,
        required: true
    }
});
const mProduct = (0, mongoose_1.model)('iProduct', productSchema);
exports.default = mProduct;
//# sourceMappingURL=productModel.js.map