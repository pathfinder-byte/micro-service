import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

    @Inject('ORDER_SERVICE')
    private orderService: ClientProxy,
    @Inject('PRODUCT_SERVICE')
    private productService: ClientProxy,
    @Inject('USER_SERVICE')
    private userService: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sum')
  sum(@Body() data): Observable<number> {
    console.log('eeeaaa');
    return this.orderService.send<number>({ cmd: 'sum' }, data.data);
  }

  @Post('join')
  async join(@Body() data: number[]): Promise<number> {
    const result = await this.orderService.send<number>({ cmd: 'join' }, data);
    const final = await lastValueFrom(result);
    return final;
  }

  @Post('product')
  async createProduct(@Body() data: any): Promise<any> {
    const result = await this.productService.send<any>(
      { cmd: 'createProduct' },
      data,
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Get('products')
  async getAllProduct(@Body() data: any): Promise<any> {
    const result = await this.productService.send<any>(
      { cmd: 'getAllProduct' },
      data,
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Get('product/:id')
  async getProduct(@Param('id') productId: string): Promise<any> {
    const result = await this.productService.send<any>(
      { cmd: 'getProduct' },
      productId,
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Put('product/:id')
  async updateProduct(
    @Param('id') productId: string,
    @Body() data: any,
  ): Promise<any> {
    const result = await this.productService.send<any>(
      { cmd: 'updateProduct' },
      { productId, data },
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Delete('product/:id')
  async deleteProduct(@Param('id') productId: string): Promise<any> {
    const result = await this.productService.send<any>(
      { cmd: 'deleteProduct' },
      productId,
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Post('order')
  async createOrder(@Body() data: any): Promise<any> {
    const result = await this.orderService.send<any>(
      { cmd: 'createOrder' },
      data,
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Get('orders')
  async getAllOrder(@Body() data: any): Promise<any> {
    const result = await this.orderService.send<any>(
      { cmd: 'getAllOrder' },
      data,
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Get('order/:id')
  async getOrder(@Param('id') orderId: string): Promise<any> {
    const result = await this.orderService.send<any>(
      { cmd: 'getOrder' },
      orderId,
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Put('order/:id')
  async updateOrder(
    @Param('id') orderId: string,
    @Body() data: any,
  ): Promise<any> {
    const result = await this.orderService.send<any>(
      { cmd: 'updateOrder' },
      { orderId, data },
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Delete('order/:id')
  async deleteOrder(@Param('id') orderId: string): Promise<any> {
    const result = await this.orderService.send<any>(
      { cmd: 'deleteOrder' },
      orderId,
    );
    const final = await lastValueFrom(result);
    return final;
  }

  @Post('user')
  async createUser(@Body() data: any): Promise<any> {
    const result = await this.userService.send<any>(
      { cmd: 'createUser' },
      data,
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Get('users')
  async getAllUser(@Body() data: any): Promise<any> {
    const result = await this.userService.send<any>(
      { cmd: 'getAllUser' },
      data,
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Get('user/:id')
  async getUser(@Param('id') userId: string): Promise<any> {
    const result = await this.userService.send<any>({ cmd: 'getUser' }, userId);
    const final = await lastValueFrom(result);
    return final;
  }
  @Put('user/:id')
  async updateUser(
    @Param('id') userId: string,
    @Body() data: any,
  ): Promise<any> {
    const result = await this.userService.send<any>(
      { cmd: 'updateUser' },
      { userId, data },
    );
    const final = await lastValueFrom(result);
    return final;
  }
  @Delete('user/:id')
  async deleteUser(@Param('id') userId: string): Promise<any> {
    const result = await this.userService.send<any>(
      { cmd: 'deleteUser' },
      userId,
    );
    const final = await lastValueFrom(result);
    return final;
  }
}
