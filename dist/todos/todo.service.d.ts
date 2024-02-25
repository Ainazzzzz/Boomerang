import { Repository } from 'typeorm';
import { Todo } from './entity/todo.entity';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    getAllTodos(): Promise<Todo[]>;
    getTodoById(id: number): Promise<Todo>;
    createTodo(todoData: Partial<Todo>): Promise<Todo>;
    updateTodo(id: number, todoData: Todo): Promise<Todo>;
    deleteTodo(id: number): Promise<void>;
}
