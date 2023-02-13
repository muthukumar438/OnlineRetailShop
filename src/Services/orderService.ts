import order from '../Models/orderModel'
import product from '../Models/productModel'
import { iOrder } from '@/Interfaces/iOrder'
import productService from './productService'
import { CreateDtoOrder } from '../dto/orderDto'
import { exceptions } from '@/Exceptions/exceptions'
import { iProduct } from '@/Interfaces/iProduct'

class OrderService{
    public orders = order
    public products = product
    public productService = new productService

    public async getOrder(orderEntry : CreateDtoOrder) : Promise<iOrder> {
        const order:iOrder = await this.orders.findOne({orderId: orderEntry}).where({ "orderStatus" : true})
        if (!order)
            throw new exceptions(404, "The order does not exist")
        return order
    }

    public async createOrder(orderEntry  : CreateDtoOrder)  : Promise<iOrder> {
        const pickedProduct : iProduct = await this.products.findOne({ProductId : orderEntry.productId})
        if (!pickedProduct || pickedProduct === null )
            throw new exceptions(404, "Product does not exist")

        var remainingQuantity : Number = pickedProduct.quantityAvailable.valueOf() - orderEntry.orderQuantity.valueOf()

        if (remainingQuantity <= 0)
            throw new exceptions(400, "Out of stock")

        const placedOrder : iOrder = await this.orders.create({
            orderId: orderEntry.orderId,
            productId: orderEntry.productId,
            orderQuantity: orderEntry.orderQuantity,
            productPrice: orderEntry.productPrice,
            orderStatus: true
        })

        pickedProduct.quantityAvailable = remainingQuantity
        console.log(JSON.stringify(pickedProduct))

        return placedOrder
    }

    public async updateOrder(orderEntry : CreateDtoOrder) : Promise<iOrder>{
        const pickedOrder : iOrder =  await this.orders.findOne({orderId : orderEntry.orderId}).where({'orderStatus': true})

        if (!pickedOrder || pickedOrder === null)
            throw new exceptions(404, 'the order is not exist')
        
        await this.orders.findOneAndUpdate({orderId : orderEntry.orderId}),{
            productId : orderEntry.productId,
            orderQuantity : orderEntry.orderQuantity,
            productPrice : orderEntry.productPrice
        }
        const updatedOrder : iOrder = await this.orders.findOne({orderId : orderEntry.orderId}).where({'orderStatus': true}) 
        return updatedOrder
    }

    public async deleteOrder(orderEntry : CreateDtoOrder) : Promise<iOrder> {
        const deleteOrder : iOrder = await this.orders.findOne({orderId : orderEntry.orderId}).where({'orderStatus': true})

        if ((!deleteOrder || deleteOrder === null))
            throw new exceptions(404, 'the order is not exist')
        await this.orders.findOneAndUpdate({orderId : orderEntry.orderId},{
            orderStatus : false
        })

        const pickedProduct = await this.products.findOne({productId : orderEntry.productId}).where({'productStatus': true})

        if (pickedProduct === null)
            throw new exceptions (404, 'the product does not exist')
            console.log(JSON.stringify(pickedProduct))
        
        var remainingQuantity : Number = pickedProduct.quantityAvailable.valueOf() + deleteOrder.orderQuantity.valueOf()
        pickedProduct.quantityAvailable = remainingQuantity
        console.log(JSON.stringify(pickedProduct))

        await this.productService.updateProduct(pickedProduct)
        
        return deleteOrder
    }
 }

 export default OrderService