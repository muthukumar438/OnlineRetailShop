/* eslint-disable prettier/prettier */
import { iProduct } from '@/Interfaces/iProduct';
import mProduct from '../Models/productModel';
import { exceptions } from '@/Exceptions/exceptions';
import { CreateDtoProduct } from '../Dto/productDto';

class ProductService {
  public products = mProduct;

  public async getAllProducts(): Promise<iProduct[]> {
    const products = await this.products.find().where({ productStatus: true });
    return products;
  }

  public async getProduct(id: string): Promise<iProduct> {
    const product: iProduct = await this.products.findOne({ productId: id }).where({ productStatus: true });
    if (!product) throw new exceptions(409, 'No such products found');
    return product;
  }

  public async createProduct(product: CreateDtoProduct): Promise<iProduct> {
    const createdProduct: iProduct = await this.products.create({
      productId: product.productId,
      productName: product.productName,
      productPrice: product.productPrice,
      quantityAvailable: product.quantityAvailable,
      productStatus: product.productStatus,
    });
    return createdProduct;
  }

  public async updateProduct(product: CreateDtoProduct): Promise<iProduct> {
    await this.products.findOneAndUpdate(
      { productId: product.productId },
      {
        productName: product.productName,
        productPrice: product.productPrice,
        quantityAvailable: product.quantityAvailable,
      },
    );
    const updatedProduct: iProduct = await this.products.findOne({ productId: product.productId });
    return updatedProduct;
  }

  public async deleteProduct(id: string): Promise<iProduct> {
    const product: iProduct = await this.products.findOne({ productId: id }).where({ productStatus: true });
    await this.products.findOneAndUpdate(
      { productId: product.productId },
      {
        productStatus: false,
      },
    );
    return product;
  }
}

export default ProductService;
