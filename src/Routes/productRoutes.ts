import ProductController from "@/Controllers/productController"
import { iRoutes } from "@/Interfaces/iRoutes"
import { Router } from "express"
import { CreateDtoProduct } from "@/Dto/productDto"

class RouteProduct implements iRoutes {
    path?: string = "/products"
    router: Router = Router()
    productController = new ProductController()

    constructor(){
        this.startRoute()
    }
    startRoute(){
        this.router.get('${this.path}/', this.productController.getProducts)
        this.router.get('${this.path}/:id', this.productController.getProducts)
        this.router.post('${this.path}/:id:',this.productController.createProduct)
        this.router.put('${this.path}/:id', this.productController.updateProduct)
        this.router.delete('${this.path}/:id', this.productController.deleteProduct)
    }
}

export default RouteProduct