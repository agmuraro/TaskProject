import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository){}

    async createUser(body: any){
        return await this.repository.createUser(body)
    }

    async findUser(){
      return await this.repository.findUser()
    }

    async updateUser(body: any){
      return await this.repository.updateUser(body)
  }

  async deleteUser(body: any){
    return await this.repository.deleteUser(body)
}
}
