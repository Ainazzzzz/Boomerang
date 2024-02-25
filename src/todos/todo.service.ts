import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async getAllTodos(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async getTodoById(id: number): Promise<Todo> {
    return this.todoRepository.findOne({ where: { id } });
  }

  async createTodo(todoData: Partial<Todo>): Promise<Todo> {
    const newTodo = this.todoRepository.create(todoData);
    return this.todoRepository.save(newTodo);
  }

  async updateTodo(id: number, todoData: Todo): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) throw new NotFoundException();

    todo.title = todoData.title;
    todo.description = todoData.description;
    return this.todoRepository.save(todo);
  }

  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
