import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() body) {
    const { title, description } = body;
    return this.taskService.createTask(title, description);
  }
}
