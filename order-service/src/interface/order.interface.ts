import { Document } from 'mongoose';
export interface IOrder extends Document {
  readonly orderNo: string;
  readonly bankName: string;
  readonly itemName: string;
  readonly total: number;
}
