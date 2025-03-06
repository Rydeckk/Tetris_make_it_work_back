import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';
import { TaskEntity } from './entities/task.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: TaskEntity })
  @Get()
  @ApiCreatedResponse({ type: TaskEntity, isArray: true })
  getAllTasks() {
    return this.tasksService.getAllTask();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: TaskEntity })
  @Get(':taskId')
  @ApiCreatedResponse({ type: TaskEntity })
  getTask(@Param('taskId') taskId: string) {
    return this.tasksService.getTask({
      id: taskId,
    });
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: TaskEntity })
  @Post()
  @ApiCreatedResponse({ type: TaskEntity })
  createTask(@Body() body: CreateTaskDto) {
    return this.tasksService.createTask(body);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: TaskEntity })
  @Put('taskId')
  @ApiCreatedResponse({ type: TaskEntity })
  updateTask(@Param('taskId') taskId: string, @Body() body: CreateTaskDto) {
    return this.tasksService.updateTask({
      ...body,
      taskId,
    });
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: TaskEntity })
  @Delete(':taskId')
  @ApiCreatedResponse({ type: TaskEntity })
  deleteTask(@Param('taskId') taskId: string) {
    return this.tasksService.deleteTask(taskId);
  }
}
