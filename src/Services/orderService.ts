/* eslint-disable prettier/prettier */
import mOrder from '../Models/orderModel';
import mProduct from '../Models/productModel';
import { iOrder } from '@/Interfaces/iOrder';
import ProductService from './productService';
import { CreateDtoOrder } from '../Dto/orderDto';
import { exceptions } from '@/Exceptions/exceptions';
import { iProduct } from '@/Interfaces/iProduct';

class OrderService {
  public orders = mOrder;
  public products = mProduct;
  public productService = new ProductService();

  public async FindAllOrders(): Promise<iOrder[]> {
    const orders: iOrder[] = await this.orders.find();
    return orders;
  }

  public async getOrder(orderEntry: string): Promise<iOrder> {
    const order: iOrder = await this.orders.findOne({ orderId: orderEntry }).where({ orderStatus: true });
    if (!order) throw new exceptions(404, 'The order does not exist');
    return order;
  }

  public async createOrder(orderEntry: CreateDtoOrder): Promise<iOrder> {
    const pickedProduct: iProduct = await this.products.findOne({ ProductId: orderEntry.productId });
    if (!pickedProduct || pickedProduct === null) throw new exceptions(404, 'Product does not exist');

    const remainingQuantity: Number = pickedProduct.quantityAvailable.valueOf() - orderEntry.orderQuantity.valueOf();

    if (remainingQuantity <= 0) throw new exceptions(400, 'Out of stock');

    const placedOrder: iOrder = await this.orders.create({
      orderId: orderEntry.orderId,
      productId: orderEntry.productId,
      orderQuantity: orderEntry.orderQuantity,
      productPrice: orderEntry.productPrice,
      orderStatus: true,
    });

    pickedProduct.quantityAvailable = remainingQuantity;
    console.log(JSON.stringify(pickedProduct));

    return placedOrder;
  }

  public async updateOrder(orderEntry: CreateDtoOrder): Promise<iOrder> {
    const pickedOrder: iOrder = await this.orders.findOne({ orderId: orderEntry.orderId }).where({ orderStatus: true });

    if (!pickedOrder || pickedOrder === null) throw new exceptions(404, 'the order is not exist');

    await this.orders.findOneAndUpdate({ orderId: orderEntry.orderId }),
      {
        productId: orderEntry.productId,
        orderQuantity: orderEntry.orderQuantity,
        productPrice: orderEntry.productPrice,
      };
    const updatedOrder: iOrder = await this.orders.findOne({ orderId: orderEntry.orderId }).where({ orderStatus: true });
    return updatedOrder;
  }

  public async deleteOrder(id: string): Promise<iOrder> {
    const deletedOrder: iOrder = await this.orders.findOneAndDelete({ orderId: id }).where({ orderStatus: true });

    if (!deletedOrder || deletedOrder === null) throw new exceptions(404, 'the order is not exist');
    await this.orders.findOneAndUpdate(
      { orderId: deletedOrder.orderId },
      {
        orderStatus: false,
      },
    );

    const pickedProduct = await this.products.findOne({ productId: deletedOrder.productId }).where({ productStatus: true });

    if (pickedProduct === null) throw new exceptions(404, 'the product does not exist');
    console.log(JSON.stringify(pickedProduct));

    const remainingQuantity: Number = pickedProduct.quantityAvailable.valueOf() + deletedOrder.orderQuantity.valueOf();
    pickedProduct.quantityAvailable = remainingQuantity;
    console.log(JSON.stringify(pickedProduct));

    // await this.productService.updateProduct(pickedProduct)

    return deletedOrder;
  }
}

export default OrderService;
