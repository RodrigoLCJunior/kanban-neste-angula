"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const user_service_1 = require("../../user/services/user.service");
const auth_service_1 = require("../../auth/services/auth.service");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
const connection_service_1 = require("../services/connection.service");
const todo_service_1 = require("../services/todo.service");
let TodoGateway = class TodoGateway {
    constructor(userService, authService, connectionService, todoService) {
        this.userService = userService;
        this.authService = authService;
        this.connectionService = connectionService;
        this.todoService = todoService;
    }
    async handleConnection(socket) {
        try {
            const decodedToken = await this.authService.verifyJwt(socket.handshake.auth.Authorization);
            const user = await this.userService.getOneById(decodedToken.user.id);
            if (!user) {
                console.log('disconnect user');
                return this.disconnect(socket);
            }
            else {
                console.log('do smth', user);
                await this.connectionService.create({
                    socketId: socket.id,
                    connectedUser: user,
                });
                const todos = await this.todoService.findAll();
                return this.server.to(socket.id).emit('todos', todos);
            }
        }
        catch (_a) {
            console.log('disconnect user');
            return this.disconnect(socket);
        }
    }
    async handleDisconnect(socket) {
        await this.connectionService.deleteBySocketId(socket.id);
        socket.disconnect();
    }
    async onAddTodo(socket, todoItem) {
        const createdTodoItem = await this.todoService.save(todoItem);
        const connections = await this.connectionService.findAll();
        for (const connection of connections) {
            this.server.to(connection.socketId).emit('addedTodo', createdTodoItem);
        }
    }
    async onUpdateTodo(socket, todoItem) {
        const updatedTodoItem = await this.todoService.update(todoItem);
        const connections = await this.connectionService.findAll();
        for (const connection of connections) {
            this.server.to(connection.socketId).emit('updatedTodo', updatedTodoItem);
        }
    }
    disconnect(socket) {
        socket.emit('Error', new common_1.UnauthorizedException());
        socket.disconnect();
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], TodoGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('addTodo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], TodoGateway.prototype, "onAddTodo", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateTodo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], TodoGateway.prototype, "onUpdateTodo", null);
TodoGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: 'todos',
        cors: { origin: ['http://localhost:3000', 'http://localhost:4200'] },
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService,
        connection_service_1.ConnectionService,
        todo_service_1.TodoService])
], TodoGateway);
exports.TodoGateway = TodoGateway;
//# sourceMappingURL=todo.gateway.js.map