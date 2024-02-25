import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getAllTodo(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  async getTodoById(@Param('id') id: number): Promise<Todo> {
    return this.todoService.getTodoById(id);
  }

  @Post()
  async createTodoItem(@Body() todoData: Todo): Promise<Todo> {
    return this.todoService.createTodo(todoData);
  }

  @Put(':id')
  async updateTodo(@Param('id') id: number, @Body() data: Todo): Promise<Todo> {
    return this.todoService.updateTodo(id, data);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number): Promise<void> {
    return this.todoService.deleteTodo(id);
  }
}
