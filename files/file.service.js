"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
const nestjs_form_data_1 = require("nestjs-form-data");
let FileService = class FileService {
    createFile(directory, file) {
        try {
            let fileExtension = '';
            if (file instanceof nestjs_form_data_1.MemoryStoredFile) {
                fileExtension = file.originalName.split('.').pop();
            }
            else {
                fileExtension = file.originalname.split('.').pop();
            }
            const fileName = `${uuid.v4()}.${fileExtension}`;
            const filePath = path.resolve(__dirname, '..', 'static', directory);
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
};
FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map