import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller()
export class AppController {
  private logger;
  constructor(private readonly appService: AppService) {
    this.logger = new Logger('OrderService');
  }

  @MessagePattern({ cmd: 'product' })
  accumulate(data): any {
    console.log(data);
    // this.productController.createProduct(data, data);
  }
  @MessagePattern({ cmd: 'createProduct' })
  async createProduct(createProductDto: CreateProductDto) {
    const newProduct = await this.appService.createProduct(createProductDto);
    if (newProduct) {
      return {
        message: 'Product has been created successfully',
        product: newProduct,
      };
    } else {
      return 'Product already exists';
    }
  }
  @MessagePattern({ cmd: 'updateProduct' })
  async updateProduct({
    productId,
    data: updateProductDto,
  }: {
    productId: string;
    data: any;
    updateProduct: UpdateProductDto;
  }) {
    console.log('updateProduct', productId, updateProductDto);
    const existingProduct = await this.appService.updateProduct(
      productId,
      updateProductDto,
    );
    if (existingProduct) {
      return {
        message: 'Product has been successfully updated',
        existingProduct,
      };
    } else {
      return {
        error: 'Cannot update product',
      };
    }
  }
  @MessagePattern({ cmd: 'getAllProduct' })
  async getProducts() {
    const productData = await this.appService.getAllProducts();
    if (productData) {
      return {
        message: 'All products data found successfully',
        productData,
      };
    } else {
      return {
        error: 'Cannot get data product',
      };
    }
  }

  @MessagePattern({ cmd: 'getProduct' })
  async getProduct(productId: string) {
    console.log(productId);
    const existingProduct = await this.appService.getProduct(productId);
    if (existingProduct) {
      return {
        message: 'Product found successfully',
        existingProduct,
      };
    } else {
      return {
        error: 'Cannot get product',
      };
    }
  }
  @MessagePattern({ cmd: 'deleteProduct' })
  async deleteProduct(productId: string) {
    const deletedProduct = await this.appService.deleteProduct(productId);
    if (deletedProduct) {
      return {
        message: 'Product deleted successfully',
        deletedProduct,
      };
    } else {
      return {
        error: 'Cannot delete product',
      };
    }
  }
}
