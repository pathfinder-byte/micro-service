import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { MessagePattern } from '@nestjs/microservices';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @MessagePattern({ cmd: 'user' })
  accumulate(data): any {
    console.log(data);
  }
  @MessagePattern({ cmd: 'createUser' })
  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.appService.createUser(createUserDto);
    if (newUser) {
      return {
        message: 'User has been created successfully',
        user: newUser,
      };
    } else {
      return 'User already exists';
    }
  }
  @MessagePattern({ cmd: 'updateUser' })
  async updateUser({
    userId,
    data: updateUserDto,
  }: {
    userId: string;
    data: any;
    updateUser: UpdateUserDto;
  }) {
    console.log('updateUser', userId, updateUserDto);
    const existingUser = await this.appService.updateUser(
      userId,
      updateUserDto,
    );
    if (existingUser) {
      return {
        message: 'User has been successfully updated',
        existingUser,
      };
    } else {
      return {
        error: 'Cannot update user',
      };
    }
  }
  @MessagePattern({ cmd: 'getAllUser' })
  async getUsers() {
    const userData = await this.appService.getAllUsers();
    if (userData) {
      return {
        message: 'All users data found successfully',
        userData,
      };
    } else {
      return {
        error: 'Cannot get data user',
      };
    }
  }

  @MessagePattern({ cmd: 'getUser' })
  async getUser(userId: string) {
    console.log(userId);
    const existingUser = await this.appService.getUser(userId);
    if (existingUser) {
      return {
        message: 'User found successfully',
        existingUser,
      };
    } else {
      return {
        error: 'Cannot get user',
      };
    }
  }
  @MessagePattern({ cmd: 'deleteUser' })
  async deleteUser(userId: string) {
    const deletedUser = await this.appService.deleteUser(userId);
    if (deletedUser) {
      return {
        message: 'User deleted successfully',
        deletedUser,
      };
    } else {
      return {
        error: 'Cannot delete user',
      };
    }
  }
}
