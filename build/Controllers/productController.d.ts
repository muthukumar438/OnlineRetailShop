import ProductService from '@/Services/productService';
import { Request, Response } from 'express';
declare class ProductController {
    productService: ProductService;
    getProducts: (req: Request, res: Response) => Promise<void>;
    findProductById: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    updateProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
}
export default ProductController;
