import ordersController from "@/Controllers/orderController";
import { iRoutes } from "@/Interfaces/iRoutes";
import { Router } from "express";
declare class OrderRoute implements iRoutes {
    path?: string;
    router: Router;
    orderController: ordersController;
    constructor();
    startRoute(): void;
}
export default OrderRoute;
