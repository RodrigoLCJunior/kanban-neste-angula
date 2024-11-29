import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { TodoItem } from '../todo.interface';
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(): Promise<TodoItem[]>;
    saveAll(todoItems: TodoItem[]): Promise<TodoItem[]>;
    save(todoItem: TodoItem): Promise<TodoItem>;
    update(todoItem: TodoItem): Promise<TodoItem>;
}
