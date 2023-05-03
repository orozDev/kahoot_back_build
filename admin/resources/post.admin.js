"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAdminOptions = void 0;
const post_entity_1 = require("../../post/entities/post.entity");
exports.postAdminOptions = {
    resource: post_entity_1.PostEntity,
    options: {
        listProperties: ['id', 'title', 'description', 'createdAt'],
    },
};
//# sourceMappingURL=post.admin.js.map