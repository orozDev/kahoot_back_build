"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
const AWS = require("aws-sdk");
const nestjs_form_data_1 = require("nestjs-form-data");
const config_1 = require("@nestjs/config");
let FileService = class FileService {
    constructor(config) {
        this.config = config;
        this.AWS_S3_BUCKET = this.config.get('AWS_S3_BUCKET');
        this.logger = new common_1.Logger('FileService');
    }
    get S3() {
        return new AWS.S3({
            accessKeyId: this.config.get('AWS_S3_ACCESS_KEY'),
            secretAccessKey: this.config.get('AWS_S3_KEY_SECRET'),
        });
    }
    decodeFile(directory, file) {
        let fileExtension = '';
        if (file instanceof nestjs_form_data_1.MemoryStoredFile) {
            fileExtension = file.originalName.split('.').pop();
        }
        else {
            fileExtension = file.originalname.split('.').pop();
        }
        const fileName = `${uuid.v4()}.${fileExtension}`;
        const filePath = path.resolve(__dirname, '..', 'static', directory);
        return { fileName, filePath };
    }
    createFile(directory, file) {
        try {
            const { filePath, fileName } = this.decodeFile(directory, file);
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
            return `${directory}/${fileName}`;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    removeFile(fileName, throwOnError = true) {
        const filePath = path.resolve(__dirname, '..', 'static', fileName);
        if (!fs.existsSync(filePath) && throwOnError) {
            throw new common_1.HttpException({ message: `The file "${fileName}" does not exist` }, common_1.HttpStatus.BAD_REQUEST);
        }
        fs.rmSync(filePath);
    }
    async createS3File(directory, file) {
        const { filePath, fileName } = this.decodeFile(directory, file);
        await this.s3Upload(file.buffer, fileName, filePath, file.mimetype);
    }
    async s3Upload(file, fileName, filePath, mimetype) {
        const params = {
            Bucket: this.AWS_S3_BUCKET,
            Key: `${filePath}/${fileName}`,
            Body: file,
            ACL: 'public-read',
            ContentType: mimetype,
            ContentDisposition: 'inline',
            CreateBucketConfiguration: {
                LocationConstraint: 'ap-south-1',
            },
        };
        return new Promise((resolve, reject) => {
            this.S3.upload(params, (err, data) => {
                if (err) {
                    common_1.Logger.error(err);
                    reject(err.message);
                }
                resolve(data);
            });
        });
    }
    async removeS3File(path) {
        const params = {
            Bucket: this.AWS_S3_BUCKET,
            Key: path,
        };
        return new Promise((resolve, reject) => {
            this.S3.deleteObject(params, (err, data) => {
                if (err) {
                    common_1.Logger.error(err);
                    reject(err.message);
                }
                resolve(data);
            });
        });
    }
};
FileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map