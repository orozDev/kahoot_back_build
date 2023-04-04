/// <reference types="multer" />
export declare class FilesService {
    createFile(directory: string, file: Express.Multer.File): string;
    removeFile(fileName: any): void;
}
