/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { iOrder } from '@/Interfaces/iOrder';
import ProductService from './productService';
import { CreateDtoOrder } from '../Dto/orderDto';
import { iProduct } from '@/Interfaces/iProduct';
declare class OrderService {
    orders: import("mongoose").Model<iOrder, {}, {}, {}, any>;
    products: import("mongoose").Model<iProduct, {}, {}, {}, any>;
    productService: ProductService;
    FindAllOrders(): Promise<iOrder[]>;
    getOrder(orderEntry: string): Promise<iOrder>;
    createOrder(orderEntry: CreateDtoOrder): Promise<iOrder>;
    updateOrder(orderEntry: CreateDtoOrder): Promise<iOrder>;
    deleteOrder(id: string): Promise<iOrder>;
}
export default OrderService;
