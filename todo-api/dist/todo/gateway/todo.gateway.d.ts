import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { UserService } from '../../user/services/user.service';
import { AuthService } from '../../auth/services/auth.service';
import { Server, Socket } from 'socket.io';
import { ConnectionService } from '../services/connection.service';
import { TodoService } from '../services/todo.service';
import { TodoItem } from "../todo.interface";
export declare class TodoGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private userService;
    private authService;
    private connectionService;
    private todoService;
    server: Server;
    constructor(userService: UserService, authService: AuthService, connectionService: ConnectionService, todoService: TodoService);
    handleConnection(socket: Socket): Promise<boolean | void>;
    handleDisconnect(socket: Socket): Promise<void>;
    onAddTodo(socket: Socket, todoItem: TodoItem): Promise<void>;
    onUpdateTodo(socket: Socket, todoItem: TodoItem): Promise<void>;
    private disconnect;
}
