"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoHelperService = void 0;
const common_1 = require("@nestjs/common");
let DtoHelperService = class DtoHelperService {
    createUserDtoToEntity(createUserDto) {
        return {
            email: createUserDto.email,
            password: createUserDto.password,
            username: createUserDto.username,
        };
    }
    loginUserDtoToEntity(loginUserDto) {
        return {
            email: loginUserDto.email,
            password: loginUserDto.password,
        };
    }
};
DtoHelperService = __decorate([
    (0, common_1.Injectable)()
], DtoHelperService);
exports.DtoHelperService = DtoHelperService;
//# sourceMappingURL=dto-helper.service.js.map