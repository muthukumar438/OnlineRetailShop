import ordersController from "@/Controllers/orderController";
import { CreateDtoOrder } from "@/dto/orderDto";
import { iRoutes } from "@/Interfaces/iRoutes";
import { Router } from "express";


class orderRoute implements iRoutes{
    public path?: string = "/orders";
    public router: Router= Router();
    
    public orderController = new ordersController();  
    
    constructor(){
        this.startRoute();
    }
    startRoute()
    {
        this.router.get('${this.path}/:id', this.orderController.getOrder);
        this.router.post('${this.path}/:id', this.orderController.createOrder);
        this.router.put('${this.path}/:id', this.orderController.updateOrder);
        this.router.delete('${this.path}/:id', this.orderController.deleteOrder);
    }
}

export default orderRoute