import { Connection } from '../../todo/entities/connection.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    connections: Connection[];
    emailAndUsernameToLowerCase(): void;
    image: string;
}
