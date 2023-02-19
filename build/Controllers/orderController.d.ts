import OrderService from '@/Services/orderService';
import { Request, Response } from 'express';
declare class OrderController {
    orderService: OrderService;
    getAllOrders: (req: Request, res: Response) => Promise<void>;
    getOrder: (req: Request, res: Response) => Promise<void>;
    createOrder: (req: Request, res: Response) => Promise<void>;
    updateOrder: (req: Request, res: Response) => Promise<void>;
    deleteOrder: (req: Request, res: Response) => Promise<void>;
}
export default OrderController;
