import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostQueryDto } from './post-query.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<import("./entities/post.entity").PostEntity>;
    findAll(query: PostQueryDto): Promise<import("../utils/interfaces/complex-request.interface").IComplexRequest<import("./entities/post.entity").PostEntity[]>>;
    findOne(id: string): Promise<import("./entities/post.entity").PostEntity>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("./entities/post.entity").PostEntity>;
    remove(id: string): Promise<void>;
}
