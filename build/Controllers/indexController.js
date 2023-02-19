"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
        this.index = (req, res, next) => {
            try {
                res.send("Hello world, welcome to my web app !!!");
                req.statusCode = 200;
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = IndexController;
//# sourceMappingURL=indexController.js.map