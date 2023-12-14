import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Order {
  @Prop()
  orderNo: string;
  @Prop()
  bankName: string;
  @Prop()
  itemName: string;
  @Prop()
  total: number;
}
export const OrderSchema = SchemaFactory.createForClass(Order);
