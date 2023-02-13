import { CreateDtoOrder } from '@/dto/orderDto';
import { iOrder } from '@/Interfaces/iOrder';
import OrderService from '@/Services/orderService';
import { Request, Response } from 'express';

class orderController {
    public orderService = new OrderService();

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

export default orderController;