import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: any) {
    return this.userService.createUser(body);
  }

  @Get()
  async findUser(){
    return this.userService.findUser();
  }

  @Put()
    async updateUser(@Body() body: any){
        return await this.userService.updateUser(body)
    }

  @Delete()
    async deleteUser(@Body() body: any){
        return await this.userService.deleteUser(body)
    }
}

