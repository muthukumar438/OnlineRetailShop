"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const productService_1 = tslib_1.__importDefault(require("@/Services/productService"));
class ProductController {
    constructor() {
        this.productService = new productService_1.default();
        this.getProducts = async (req, res) => {
            try {
                const findAllProductsData = await this.productService.getAllProducts();
                res.status(200).json({ data: findAllProductsData, message: 'findAll' });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.findProductById = async (req, res) => {
            try {
                const findProductsData = await this.productService.getProduct(req.params.id);
                res.status(200).json({ data: findProductsData, message: 'findProductByID' });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.createProduct = async (req, res) => {
            try {
                const productData = req.body;
                const createdProduct = await this.productService.createProduct(productData);
                res.status(201).json({ data: createdProduct, message: 'create product' });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.updateProduct = async (req, res) => {
            try {
                const productData = req.body;
                console.log(JSON.stringify(productData));
                const product = await this.productService.updateProduct(productData);
                res.status(200).json({ data: product, message: 'Update product' });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.deleteProduct = async (req, res) => {
            try {
                const product = await this.productService.deleteProduct(req.params.id);
                res.status(200).json({ data: product, message: 'Delete product' });
            }
            catch (error) {
                console.log(error);
            }
        };
    }
}
exports.default = ProductController;
//# sourceMappingURL=productController.js.map