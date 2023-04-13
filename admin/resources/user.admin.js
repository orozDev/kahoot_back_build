"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAdminOptions = void 0;
const user_entity_1 = require("../../user/entities/user.entity");
exports.userAdminOptions = {
    resource: user_entity_1.UserEntity,
    options: {
        listProperties: ['id', 'firstName', 'lastName', 'email', 'phone'],
    },
};
//# sourceMappingURL=user.admin.js.map