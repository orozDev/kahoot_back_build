"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationPipeOptions = void 0;
const validation_exception_1 = require("../exceptions/validation.exception");
exports.validationPipeOptions = {
    transform: true,
    exceptionFactory: (errors) => {
        if (errors.length) {
            let messages = {};
            errors.forEach((err) => {
                messages = Object.assign(Object.assign({}, messages), { [err.property]: Object.values(err.constraints) });
            });
            throw new validation_exception_1.ValidationException(messages);
        }
    },
};
//# sourceMappingURL=validation-pipe.options.js.map