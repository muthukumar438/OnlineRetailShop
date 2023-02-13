import { iProduct } from '@/Interfaces/iProduct'
import product from '../Models/productModel'
import { exceptions } from '@/Exceptions/exceptions'
import { CreateDtoProduct } from '../dto/productDto'

class productService{

    public products = product

    public async getAllProducts(): Promise<iProduct[]>{
        const products = await this.products.find().where({'productStatus': true})
        return products
    }

    public async getProduct(id : string): Promise<iProduct>{
        const product: iProduct = await this.products.findOne({productId : id}).where({'productStatus' : true})
        if (!product)
            throw new exceptions (409, "No such products found")
            return product
    }

    public async createProduct(product : CreateDtoProduct) : Promise<iProduct>{
        const createdProduct : iProduct = await this.products.create({
            productId : product.productId,
            productName : product.productName,
            productPrice : product.productPrice,
            quantityAvailable : product.quantityAvailable,
            productStatus : product.productStatus
        })
        return createdProduct
    }

    public async updateProduct(product : CreateDtoProduct): Promise <iProduct> {
        await this.products.findOneAndUpdate({
            productId : product.productId,
            productName : product.productName,
            productPrice: product.productPrice,
            quantityAvailable : product.quantityAvailable
        })
        const updatedProduct : iProduct = await this.products.findOne({productId : product.productId})
        return updatedProduct
    }

    
}

export default productService