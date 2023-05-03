import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UserEntity } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { PostEntity } from './entities/post.entity';
import { FileService } from '../files/file.service';
import { UtilsService } from '../utils/utils.service';
import { PostQueryDto } from './post-query.dto';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
export declare class PostService {
    private userRepository;
    private postRepository;
    private fileService;
    private utils;
    constructor(userRepository: Repository<UserEntity>, postRepository: Repository<PostEntity>, fileService: FileService, utils: UtilsService);
    create(createPostDto: CreatePostDto): Promise<PostEntity>;
    findAll(query: PostQueryDto): Promise<IComplexRequest<PostEntity[]>>;
    findOne(id: number): Promise<PostEntity>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity>;
    remove(id: number): Promise<void>;
}
