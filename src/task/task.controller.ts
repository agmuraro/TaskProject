import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private service: TaskService) {}

  @Post()
    async createTask(@Body() body: { title: string; user: { id: number }; description?: string }){
        return await this.service.createTask(body)
    }

  @Get()
    async getAllTasks(){
        return await this.service.getAllTasks()
    }
  
  @Get(':id')
    async getTaskById(@Param('id') id: number){
        return await this.service.getTaskById(id)
    }

  @Put()
    async updateTask(@Body() id:number, body: { title: string, description?: string}){
        return await this.service.updateTask(id, body)
    }

  @Delete()
    async deleteTask(@Body() id:number){
        return await this.service.deleteTask(id)
    }
}
