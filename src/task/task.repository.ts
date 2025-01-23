import { Injectable } from "@nestjs/common";
import { title } from "process";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class TaskRepository {
    constructor(private prisma: PrismaService) {}

    async createTask(body: { title: string; user: { id: number }; description?: string }) {
        try {
            return await this.prisma.task.create({
                data: {
                    title: body.title,
                    userId: body.user.id,
                    description: body.description,
                },
            });
        } catch (error) {
            throw new Error(`Failed to create task: ${error.message}`);
        }
    }

    async getAllTasks() {
        try {
            return await this.prisma.task.findMany();
        }
        catch (error) {
            throw new Error('Failed to fetch tasks');
        }
    }

    async getTaskById(id: number) {
        try {
            return await this.prisma.task.findUnique({
                where: {
                    id: id,
                },
            });
        } catch (error) {
            throw new Error(`Failed to fetch task: ${error.message}`);
        }
    }

    async updateTask(id:number, body: { title: string, description?: string}) {
        try {
            return await this.prisma.task.update({
                data: {
                    title: body.title,
                    description: body.description,
                },
                where: {
                    id: id,
                },
            });
        } catch (error) {
            throw new Error(`Failed to update task: ${error.message}`);
        }
    }

    async deleteTask(id: number){
        try{
            return await this.prisma.task.delete({
                where: {
                    id:id,
                }
            })
        }
        catch (error){
            throw new Error('Failed to delete task');
        }
    }


}