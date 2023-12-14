import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { mongoConnection } from './config/db.js';
import { ProductSchema } from 'src/schema/product-model';
import { ProductController } from './product/product.controller';
import { ProductService } from './service/product/product.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.50.136:27017', {
      dbName: 'micro-service',
    }),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
