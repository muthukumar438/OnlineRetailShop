/* eslint-disable prettier/prettier */
import { model, Schema } from 'mongoose';
import { iProduct } from '@/Interfaces/iProduct';

const productSchema: Schema = new Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: false,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  quantityAvailable: {
    type: Number,
    required: true,
    default: 0,
  },
  productStatus: {
    type: Boolean,
    required: true,
  },
});

const mProduct = model<iProduct>('iProduct', productSchema);
export default mProduct;
