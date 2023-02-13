import productController from "@/Controllers/productController"
import { iRoutes } from "@/Interfaces/iRoutes"
import { Router } from "express"

class RouteProduct implements iRoutes {
    path?: string = "/products"
    router: Router = Router()
    productController = new productController()

    constructor(){
        this.startRoute()
    }
    startRoute(){
        this.router.get('${this.path}/', this.productController.getAllProducts)
        this.router.get('${this.path}/:id', this.productController.findProductById)
        this.router.post('${this.path}/:id:',this.productController.createProduct)
        this.router.put('${this.path}/:id', this.productController.updateProduct)
        this.router.delete(`${this.path}/:id`, this.productController.deleteProduct)
    }
}

export default RouteProduct