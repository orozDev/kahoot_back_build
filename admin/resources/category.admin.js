"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryAdminOptions = void 0;
const category_entity_1 = require("../../category/entities/category.entity");
exports.categoryAdminOptions = {
    resource: category_entity_1.CategoryEntity,
    options: {
        listProperties: ['id', 'title'],
    },
};
//# sourceMappingURL=category.admin.js.map