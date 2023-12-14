import { Document } from 'mongoose';
export interface IProduct extends Document {
  readonly name: string;
  readonly category: string;
  readonly price: number;
  readonly stock: number;
}
