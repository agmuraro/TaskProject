import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class UserRepository{
    constructor(private prisma: PrismaService){}

    async createUser(body: any){
        return await this.prisma.user.create({
            data: body
        })
    }

    async findUser(){
        return await this.prisma.user.findMany()
    }

    async updateUser(body: any){
        return await this.prisma.user.update({
            data: {
                username: body.username,
                email: body.email,
                password: body.password
            },
            where: {
                id: body.id,
            }
        })

    }

    async deleteUser(body: any){
        return await this.prisma.user.delete({
            where: {
                id: body.id
            }
        })
    }

}