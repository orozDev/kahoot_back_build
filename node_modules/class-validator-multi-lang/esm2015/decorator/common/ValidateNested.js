import { ValidationTypes } from '../../validation/ValidationTypes';
import { ValidationMetadata } from '../../metadata/ValidationMetadata';
import { getMetadataStorage } from '../../metadata/MetadataStorage';
import { getText } from '../../multi-lang';
/**
 * Objects / object arrays marked with this decorator will also be validated.
 */
export function ValidateNested(validationOptions) {
    const opts = { ...validationOptions };
    const eachPrefix = opts.each ? getText('each value in ') : '';
    opts.message = opts.message || eachPrefix + getText('nested property $property must be either object or array');
    return function (object, propertyName) {
        const args = {
            type: ValidationTypes.NESTED_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: opts,
        };
        getMetadataStorage().addValidationMetadata(new ValidationMetadata(args));
    };
}
//# sourceMappingURL=ValidateNested.js.map