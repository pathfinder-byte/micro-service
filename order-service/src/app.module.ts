import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './schema/order-model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.50.136:27017', {
      dbName: 'micro-service',
    }),
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
