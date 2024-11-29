import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { AuthMiddleware } from './auth.middleware';
import { User } from './user/entities/user.entity';
import { Connection } from './todo/entities/connection.entity';
import { Todo } from './todo/entities/todo.entity';
import { JwtAuthGuard } from './auth/guards/jwt.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true  // Caminho para o arquivo .env (se não estiver na raiz, forneça o caminho correto)
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3336,
      username: "unicesumar",
      password: "unicesumar",
      database: "blog",
      entities: [User, Connection, Todo],
      synchronize: true,
    }),
    AuthModule,
    TodoModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        {
          path: '/api/users',
          method: RequestMethod.POST,
        },
        {
          path: '/api/users/login',
          method: RequestMethod.POST,
        },
      )
      .forRoutes('');
  }
}

