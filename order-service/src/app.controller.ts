import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller()
export class AppController {
  private logger;
  constructor(private readonly appService: AppService) {
    this.logger = new Logger('OrderService');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'order' })
  accumulate(data): any {
    console.log(data);
  }
  @MessagePattern({ cmd: 'createOrder' })
  async createOrder(createOrderDto: CreateOrderDto) {
    const newOrder = await this.appService.createOrder(createOrderDto);
    if (newOrder) {
      return {
        message: 'Order has been created successfully',
        order: newOrder,
      };
    } else {
      return 'Order already exists';
    }
  }
  @MessagePattern({ cmd: 'updateOrder' })
  async updateOrder({
    orderId,
    data: updateOrderDto,
  }: {
    orderId: string;
    data: any;
    updateOrder: UpdateOrderDto;
  }) {
    console.log('updateOrder', orderId, updateOrderDto);
    const existingOrder = await this.appService.updateOrder(
      orderId,
      updateOrderDto,
    );
    if (existingOrder) {
      return {
        message: 'Order has been successfully updated',
        existingOrder,
      };
    } else {
      return {
        error: 'Cannot update order',
      };
    }
  }
  @MessagePattern({ cmd: 'getAllOrder' })
  async getOrders() {
    const orderData = await this.appService.getAllOrders();
    if (orderData) {
      return {
        message: 'All orders data found successfully',
        orderData,
      };
    } else {
      return {
        error: 'Cannot get data order',
      };
    }
  }

  @MessagePattern({ cmd: 'getOrder' })
  async getOrder(orderId: string) {
    console.log(orderId);
    const existingOrder = await this.appService.getOrder(orderId);
    if (existingOrder) {
      return {
        message: 'Order found successfully',
        existingOrder,
      };
    } else {
      return {
        error: 'Cannot get order',
      };
    }
  }
  @MessagePattern({ cmd: 'deleteOrder' })
  async deleteOrder(orderId: string) {
    const deletedOrder = await this.appService.deleteOrder(orderId);
    if (deletedOrder) {
      return {
        message: 'Order deleted successfully',
        deletedOrder,
      };
    } else {
      return {
        error: 'Cannot delete order',
      };
    }
  }
}
