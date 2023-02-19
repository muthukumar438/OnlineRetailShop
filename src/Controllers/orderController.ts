import { CreateDtoOrder } from '@/Dto/orderDto';
import { iOrder } from '@/Interfaces/iOrder';
import OrderService from '@/Services/orderService';
import { Request, Response } from 'express';

class OrderController {
    public orderService = new OrderService();

    public getAllOrders = async (req: Request, res: Response) => {
      try {
        const findAllordersData: iOrder[] = await this.orderService.FindAllOrders();
        res.status(200).json({ data: findAllordersData, message: 'findAll' });
      } catch (error) {
        console.log(error);
      }
    };

    public getOrder = async (req: Request, res: Response) => {
        try{
            console.log(req.params.id);
            const order: iOrder = await this.orderService.getOrder(req.params.id);

            res.status(200).json({ data: order, message: 'Order found successfully' });
        } catch (error) {
            console.log(error);
        }
    };

    public createOrder = async (req: Request, res: Response) => {
      try {
          const orderData: CreateDtoOrder = req.body;
          const createdorder: iOrder = await this.orderService.createOrder(orderData);
          res.status(201).json({ data: createdorder, message: 'Order created successfully' });
      } catch (error) {
        console.log(error);
        }
    };
    
    public updateOrder = async (req: Request, res: Response) => {
      try {
        const orderData: CreateDtoOrder = req.body;
        const order: iOrder = await this.orderService.updateOrder(orderData);
        res.status(200).json({ data: order, message: 'Order updated successfully' });
      } catch (error) {
        console.log(error);
        }
    };

    public deleteOrder = async (req: Request, res: Response) => {
      try {
          const order: iOrder = await this.orderService.deleteOrder(req.params.id)
          res.status(200).json({ data: order, message: 'Order deleted successfully' });
      } catch (error) {
        console.log(error);
        }
    };
}

export default OrderController;