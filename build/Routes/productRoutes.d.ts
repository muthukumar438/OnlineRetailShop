import ProductController from "@/Controllers/productController";
import { iRoutes } from "@/Interfaces/iRoutes";
import { Router } from "express";
declare class RouteProduct implements iRoutes {
    path?: string;
    router: Router;
    productController: ProductController;
    constructor();
    startRoute(): void;
}
export default RouteProduct;
