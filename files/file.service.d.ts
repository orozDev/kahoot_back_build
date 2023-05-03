/// <reference types="multer" />
import { MemoryStoredFile } from 'nestjs-form-data';
export declare class FileService {
    createFile(directory: string, file: Express.Multer.File | MemoryStoredFile): string;
    removeFile(fileName: any, throwOnError?: boolean): void;
}
