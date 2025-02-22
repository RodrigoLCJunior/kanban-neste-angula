import { NestMiddleware } from '@nestjs/common';
import { AuthService } from './auth/services/auth.service';
import { UserService } from './user/services/user.service';
import { UserI } from './user/user.interfaces';
import { NextFunction } from 'express';
export interface RequestModel {
    user: UserI;
    headers: any;
}
export declare class AuthMiddleware implements NestMiddleware {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    use(request: RequestModel, response: Response, next: NextFunction): Promise<void>;
}
