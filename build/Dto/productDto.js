"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDtoProduct = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateDtoProduct {
    constructor() {
        this.productStatus = true;
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsAlphanumeric)(),
    tslib_1.__metadata("design:type", String)
], CreateDtoProduct.prototype, "productId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsAlphanumeric)(),
    tslib_1.__metadata("design:type", String)
], CreateDtoProduct.prototype, "productName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateDtoProduct.prototype, "quantityAvailable", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateDtoProduct.prototype, "productPrice", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateDtoProduct.prototype, "productStatus", void 0);
exports.CreateDtoProduct = CreateDtoProduct;
//# sourceMappingURL=productDto.js.map