import { Connection } from '../entities/connection.entity';
import { Repository } from 'typeorm';
import { ConnectionI } from '../todo.interface';
export declare class ConnectionService {
    private readonly connectionRepo;
    constructor(connectionRepo: Repository<Connection>);
    create(connection: ConnectionI): Promise<ConnectionI>;
    findByUserId(userId: number): Promise<Connection[]>;
    deleteBySocketId(socketId: string): Promise<import("typeorm").DeleteResult>;
    deleteAll(): Promise<void>;
    findAll(): Promise<ConnectionI[]>;
}
