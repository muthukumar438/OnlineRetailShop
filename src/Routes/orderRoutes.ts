/* eslint-disable prettier/prettier */
import ordersController from '@/Controllers/orderController';
import { CreateDtoOrder } from '@/Dto/orderDto';
import { iRoutes } from '@/Interfaces/iRoutes';
import validationMiddleware from '@/Middlewares/validationMiddleware';
import { Router } from 'express';

class OrderRoute implements iRoutes {
  public path?: string = '/orders';
  public router: Router = Router();

  public orderController = new ordersController();

  constructor() {
    this.startRoute();
  }
  startRoute() {
    this.router.get(`${this.path}`, this.orderController.getOrder);
    this.router.get(`${this.path}/:id`, this.orderController.getAllOrders);
    this.router.post(`${this.path}`, validationMiddleware(CreateDtoOrder, 'body'), this.orderController.createOrder);
    this.router.put(`${this.path}`, validationMiddleware(CreateDtoOrder, 'body', true), this.orderController.updateOrder);
    this.router.delete(`${this.path}/:id`, this.orderController.deleteOrder);
  }
}

export default OrderRoute;
