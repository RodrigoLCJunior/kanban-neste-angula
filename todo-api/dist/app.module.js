"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const todo_module_1 = require("./todo/todo.module");
const user_module_1 = require("./user/user.module");
const auth_middleware_1 = require("./auth.middleware");
const user_entity_1 = require("./user/entities/user.entity");
const connection_entity_1 = require("./todo/entities/connection.entity");
const todo_entity_1 = require("./todo/entities/todo.entity");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .exclude({
            path: '/api/users',
            method: common_1.RequestMethod.POST,
        }, {
            path: '/api/users/login',
            method: common_1.RequestMethod.POST,
        })
            .forRoutes('');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3336,
                username: "unicesumar",
                password: "unicesumar",
                database: "blog",
                entities: [user_entity_1.User, connection_entity_1.Connection, todo_entity_1.Todo],
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            todo_module_1.TodoModule,
            user_module_1.UserModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map