import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';
import { TaskEntity } from './entities/task.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiCreatedResponse({ type: TaskEntity, isArray: true })
  async getAllTasks() {
    const tasks = await this.tasksService.getAllTask();
    return tasks.map((task) => new TaskEntity(task));
  }

  @Get(':taskId')
  @ApiCreatedResponse({ type: TaskEntity })
  async getTask(@Param('taskId') taskId: string) {
    const task = await this.tasksService.getTask({
      id: taskId,
    });
    return new TaskEntity(task);
  }

  @Post()
  @ApiCreatedResponse({ type: TaskEntity })
  async createTask(@Body() body: CreateTaskDto) {
    const task = await this.tasksService.createTask(body);
    return new TaskEntity(task);
  }

  @Put('taskId')
  @ApiCreatedResponse({ type: TaskEntity })
  async updateTask(
    @Param('taskId') taskId: string,
    @Body() body: CreateTaskDto,
  ) {
    const task = await this.tasksService.updateTask({
      ...body,
      taskId,
    });
    return new TaskEntity(task);
  }

  @Delete(':taskId')
  @ApiCreatedResponse({ type: TaskEntity })
  async deleteTask(@Param('taskId') taskId: string) {
    const task = await this.tasksService.deleteTask(taskId);
    return task;
  }
}
