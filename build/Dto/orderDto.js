"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDtoOrder = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateDtoOrder {
    constructor() {
        this.orderStatus = true;
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsAlphanumeric)(),
    tslib_1.__metadata("design:type", String)
], CreateDtoOrder.prototype, "orderId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsAlphanumeric)(),
    tslib_1.__metadata("design:type", String)
], CreateDtoOrder.prototype, "productId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsAlphanumeric)(),
    tslib_1.__metadata("design:type", String)
], CreateDtoOrder.prototype, "productName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateDtoOrder.prototype, "orderQuantity", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateDtoOrder.prototype, "productPrice", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateDtoOrder.prototype, "orderStatus", void 0);
exports.CreateDtoOrder = CreateDtoOrder;
//# sourceMappingURL=orderDto.js.map