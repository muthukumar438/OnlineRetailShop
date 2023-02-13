// DAL - Data access layer for product
import {model, Schema} from 'mongoose';
import { iProduct } from '../Interfaces/iProduct'

var productSchema = new Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    productName: {
        type: String,
        required: false
    },
    productPrice: {
        type: Number,
        required: true
    },
    quantityAvailable: {
        type: Number,
        required: true,
        default: 0
    },
    productStatus: {
        type: Boolean,
        required: true
    }
})

const mProduct = model<iProduct>('product', productSchema)
export default mProduct