/* eslint-disable prettier/prettier */
import { CreateDtoProduct } from '@/Dto/productDto'
import { iProduct } from '@/Interfaces/iProduct';
import ProductService from '@/Services/productService';
import { Request, Response } from 'express';

class ProductController {
  public productService = new ProductService();

  public getProducts = async (req: Request, res: Response) => {
    try {
      const findAllProductsData: iProduct[] = await this.productService.getAllProducts();
      res.status(200).json({ data: findAllProductsData, message: 'findAll' });
    } catch (error) {
      console.log(error);
    }
  };

  public findProductById = async (req: Request, res: Response) => {
    try {
      const findProductsData: iProduct = await this.productService.getProduct(req.params.id);
      res.status(200).json({ data: findProductsData, message: 'findProductByID' });
    } catch (error) {
      console.log(error);
    }
  };

  public createProduct = async (req: Request, res: Response) => {
    try {
      const productData: CreateDtoProduct = req.body;
      const createdProduct: iProduct = await this.productService.createProduct(productData);
      res.status(201).json({ data: createdProduct, message: 'create product' });
    } catch (error) {
      console.log(error);
    }
  };

  public updateProduct = async (req: Request, res: Response) => {
    try {
      const productData: CreateDtoProduct = req.body;
      console.log(JSON.stringify(productData));
      const product: iProduct = await this.productService.updateProduct(productData);
      res.status(200).json({ data: product, message: 'Update product' });
    } catch (error) {
      console.log(error);
    }
  };

  public deleteProduct = async (req: Request, res: Response) => {
    try {
      const product: iProduct = await this.productService.deleteProduct(req.params.id);
      res.status(200).json({ data: product, message: 'Delete product' });
    } catch (error) {
      console.log(error);
    }
  };
}

export default ProductController;
