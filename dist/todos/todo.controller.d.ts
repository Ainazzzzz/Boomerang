import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAllTodo(): Promise<Todo[]>;
    getTodoById(id: number): Promise<Todo>;
    createTodoItem(todoData: Todo): Promise<Todo>;
    updateTodo(id: number, data: Todo): Promise<Todo>;
    deleteTodo(id: number): Promise<void>;
}
