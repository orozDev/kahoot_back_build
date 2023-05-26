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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entities/post.entity");
const file_service_1 = require("../files/file.service");
const utils_service_1 = require("../utils/utils.service");
let PostService = class PostService {
    constructor(userRepository, postRepository, fileService, utils) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
        this.fileService = fileService;
        this.utils = utils;
    }
    async create(createPostDto) {
        const { image, author } = createPostDto, rest = __rest(createPostDto, ["image", "author"]);
        const temp = {};
        if (image) {
            temp['image'] = this.fileService.createFile('post_images', image);
        }
        temp['author'] = await this.utils.getObjectOr404(this.userRepository, { where: { id: author } });
        return await this.postRepository.save(Object.assign(Object.assign({}, rest), temp));
    }
    async findAll(query) {
        const { author, search, limit, offset } = query;
        const filterQuery = {};
        if (author) {
            filterQuery['author'] = await this.utils.getObjectOr404(this.userRepository, { where: { id: author } });
        }
        return await this.utils.complexRequest({
            entity: 'post',
            repository: this.postRepository,
            search,
            searchFields: ['title', 'description', 'content'],
            filterQuery,
            limit,
            offset,
        });
    }
    async findOne(id) {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post)
            throw new common_1.NotFoundException({ message: 'Post not found' });
        return post;
    }
    async update(id, updatePostDto) {
        const post = await this.findOne(id);
        const { image, author } = updatePostDto, rest = __rest(updatePostDto, ["image", "author"]);
        const temp = {};
        if (image) {
            if (post.image)
                this.fileService.removeFile(post.image, false);
            temp['image'] = this.fileService.createFile('post_images', image);
        }
        if (author) {
            temp['author'] = await this.utils.getObjectOr404(this.userRepository, { where: { id: author } });
        }
        await this.postRepository.update({ id }, Object.assign(Object.assign({}, rest), temp));
        return await this.findOne(id);
    }
    async remove(id) {
        const post = await this.findOne(id);
        if (post.image)
            this.fileService.removeFile(post.image);
        await post.remove();
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(post_entity_1.PostEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        file_service_1.FileService,
        utils_service_1.UtilsService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map