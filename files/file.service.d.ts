/// <reference types="multer" />
import { Logger } from '@nestjs/common';
import { MemoryStoredFile } from 'nestjs-form-data';
import { ConfigService } from '@nestjs/config';
export declare class FileService {
    private config;
    constructor(config: ConfigService);
    AWS_S3_BUCKET: string;
    logger: Logger;
    private get S3();
    private decodeFile;
    createFile(directory: string, file: Express.Multer.File | MemoryStoredFile): string;
    removeFile(fileName: any, throwOnError?: boolean): void;
    createS3File(directory: string, file: Express.Multer.File | MemoryStoredFile): Promise<void>;
    private s3Upload;
    removeS3File(path: string): Promise<unknown>;
}
