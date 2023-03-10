/* eslint-disable prettier/prettier */
import { model, Schema } from 'mongoose';
import { iOrder } from '@/Interfaces/iOrder';

const orderSchema: Schema = new Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: false,
    unique: true,
  },
  orderQuantity: {
    type: Number,
    required: true,
    default: 1,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: Boolean,
    required: true,
  },
});

const mOrder = model<iOrder>('iOrder', orderSchema);
export default mOrder;
