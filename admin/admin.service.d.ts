import { DataSource } from 'typeorm';
export declare class AdminService {
    private dataSource;
    constructor(dataSource: DataSource);
    authenticate(username: string, password: string): Promise<{
        username: string;
        email: string;
    }>;
}
