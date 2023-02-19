"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const productModel_1 = tslib_1.__importDefault(require("../Models/productModel"));
const exceptions_1 = require("@/Exceptions/exceptions");
class ProductService {
    constructor() {
        this.products = productModel_1.default;
    }
    async getAllProducts() {
        const products = await this.products.find().where({ 'productStatus': true });
        return products;
    }
    async getProduct(id) {
        const product = await this.products.findOne({ productId: id }).where({ 'productStatus': true });
        if (!product)
            throw new exceptions_1.exceptions(409, "No such products found");
        return product;
    }
    async createProduct(product) {
        const createdProduct = await this.products.create({
            productId: product.productId,
            productName: product.productName,
            productPrice: product.productPrice,
            quantityAvailable: product.quantityAvailable,
            productStatus: product.productStatus
        });
        return createdProduct;
    }
    async updateProduct(product) {
        await this.products.findOneAndUpdate({ productId: product.productId }, {
            productName: product.productName,
            productPrice: product.productPrice,
            quantityAvailable: product.quantityAvailable
        });
        const updatedProduct = await this.products.findOne({ productId: product.productId });
        return updatedProduct;
    }
    async deleteProduct(id) {
        const product = await this.products.findOne({ productId: id }).where({ 'productStatus': true });
        await this.products.findOneAndUpdate({ productId: product.productId }, {
            productStatus: false
        });
        return product;
    }
}
exports.default = ProductService;
//# sourceMappingURL=productService.js.map