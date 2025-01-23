import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    constructor(private repository: TaskRepository){}

    async createTask(body: { title: string; user: { id: number }; description?: string }){
        return await this.repository.createTask(body)
    }

    async getAllTasks(){
        return await this.repository.getAllTasks()
    }

    async getTaskById(id: number){
        return await this.repository.getTaskById(id)
    }

    async updateTask(id:number, body: { title: string, description?: string}){
        return await this.repository.updateTask(id, body)
    }

    async deleteTask(id:number){
        return await this.repository.deleteTask(id)
    }
}
