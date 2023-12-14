import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Product {
  @Prop()
  name: string;
  @Prop()
  category: string;
  @Prop()
  price: number;
  @Prop()
  stock: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
