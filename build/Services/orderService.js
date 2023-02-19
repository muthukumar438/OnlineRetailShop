"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const orderModel_1 = tslib_1.__importDefault(require("../Models/orderModel"));
const productModel_1 = tslib_1.__importDefault(require("../Models/productModel"));
const productService_1 = tslib_1.__importDefault(require("./productService"));
const exceptions_1 = require("@/Exceptions/exceptions");
class OrderService {
    constructor() {
        this.orders = orderModel_1.default;
        this.products = productModel_1.default;
        this.productService = new productService_1.default;
    }
    async FindAllOrders() {
        const orders = await this.orders.find();
        return orders;
    }
    async getOrder(orderEntry) {
        const order = await this.orders.findOne({ orderId: orderEntry }).where({ "orderStatus": true });
        if (!order)
            throw new exceptions_1.exceptions(404, "The order does not exist");
        return order;
    }
    async createOrder(orderEntry) {
        const pickedProduct = await this.products.findOne({ ProductId: orderEntry.productId });
        if (!pickedProduct || pickedProduct === null)
            throw new exceptions_1.exceptions(404, "Product does not exist");
        var remainingQuantity = pickedProduct.quantityAvailable.valueOf() - orderEntry.orderQuantity.valueOf();
        if (remainingQuantity <= 0)
            throw new exceptions_1.exceptions(400, "Out of stock");
        const placedOrder = await this.orders.create({
            orderId: orderEntry.orderId,
            productId: orderEntry.productId,
            orderQuantity: orderEntry.orderQuantity,
            productPrice: orderEntry.productPrice,
            orderStatus: true
        });
        pickedProduct.quantityAvailable = remainingQuantity;
        console.log(JSON.stringify(pickedProduct));
        return placedOrder;
    }
    async updateOrder(orderEntry) {
        const pickedOrder = await this.orders.findOne({ orderId: orderEntry.orderId }).where({ 'orderStatus': true });
        if (!pickedOrder || pickedOrder === null)
            throw new exceptions_1.exceptions(404, 'the order is not exist');
        await this.orders.findOneAndUpdate({ orderId: orderEntry.orderId }), {
            productId: orderEntry.productId,
            orderQuantity: orderEntry.orderQuantity,
            productPrice: orderEntry.productPrice
        };
        const updatedOrder = await this.orders.findOne({ orderId: orderEntry.orderId }).where({ 'orderStatus': true });
        return updatedOrder;
    }
    async deleteOrder(id) {
        const deletedOrder = await this.orders.findOneAndDelete({ orderId: id }).where({ 'orderStatus': true });
        if ((!deletedOrder || deletedOrder === null))
            throw new exceptions_1.exceptions(404, 'the order is not exist');
        await this.orders.findOneAndUpdate({ orderId: deletedOrder.orderId }, {
            orderStatus: false
        });
        const pickedProduct = await this.products.findOne({ productId: deletedOrder.productId }).where({ 'productStatus': true });
        if (pickedProduct === null)
            throw new exceptions_1.exceptions(404, 'the product does not exist');
        console.log(JSON.stringify(pickedProduct));
        let remainingQuantity = pickedProduct.quantityAvailable.valueOf() + deletedOrder.orderQuantity.valueOf();
        pickedProduct.quantityAvailable = remainingQuantity;
        console.log(JSON.stringify(pickedProduct));
        // await this.productService.updateProduct(pickedProduct)
        return deletedOrder;
    }
}
exports.default = OrderService;
//# sourceMappingURL=orderService.js.map