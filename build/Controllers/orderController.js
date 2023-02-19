"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const orderService_1 = tslib_1.__importDefault(require("@/Services/orderService"));
class OrderController {
    constructor() {
        this.orderService = new orderService_1.default();
        this.getAllOrders = async (req, res) => {
            try {
                const findAllordersData = await this.orderService.FindAllOrders();
                res.status(200).json({ data: findAllordersData, message: 'findAll' });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.getOrder = async (req, res) => {
            try {
                console.log(req.params.id);
                const order = await this.orderService.getOrder(req.params.id);
                res.status(200).json({ data: order, message: 'Order found successfully' });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.createOrder = async (req, res) => {
            try {
                const orderData = req.body;
                const createdorder = await this.orderService.createOrder(orderData);
                res.status(201).json({ data: createdorder, message: 'Order created successfully' });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.updateOrder = async (req, res) => {
            try {
                const orderData = req.body;
                const order = await this.orderService.updateOrder(orderData);
                res.status(200).json({ data: order, message: 'Order updated successfully' });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.deleteOrder = async (req, res) => {
            try {
                const order = await this.orderService.deleteOrder(req.params.id);
                res.status(200).json({ data: order, message: 'Order deleted successfully' });
            }
            catch (error) {
                console.log(error);
            }
        };
    }
}
exports.default = OrderController;
//# sourceMappingURL=orderController.js.map