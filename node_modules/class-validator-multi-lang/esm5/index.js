import { getFromContainer } from './container';
import { getMetadataStorage } from './metadata/MetadataStorage';
import { Validator } from './validation/Validator';
// -------------------------------------------------------------------------
// Export everything api users needs
// -------------------------------------------------------------------------
export * from './container';
export * from './decorator/decorators';
export * from './decorator/ValidationOptions';
export * from './metadata/ConstraintMetadata';
export * from './metadata/MetadataStorage';
export * from './metadata/ValidationMetadata';
export * from './metadata/ValidationMetadataArgs';
export * from './multi-lang';
export * from './register-decorator';
export * from './validation-schema/ValidationSchema';
export * from './validation/ValidationArguments';
export * from './validation/ValidationError';
export * from './validation/ValidationTypes';
export * from './validation/Validator';
export * from './validation/ValidatorConstraintInterface';
export * from './validation/ValidatorOptions';
/**
 * Validates given object by object's decorators or given validation schema.
 */
export function validate(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === 'string') {
        return getFromContainer(Validator).validate(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return getFromContainer(Validator).validate(schemaNameOrObject, objectOrValidationOptions);
    }
}
/**
 * Validates given object by object's decorators or given validation schema and reject on error.
 */
export function validateOrReject(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === 'string') {
        return getFromContainer(Validator).validateOrReject(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return getFromContainer(Validator).validateOrReject(schemaNameOrObject, objectOrValidationOptions);
    }
}
/**
 * Validates given object by object's decorators or given validation schema.
 * Note that this method completely ignores async validations.
 * If you want to properly perform validation you need to call validate method instead.
 */
export function validateSync(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === 'string') {
        return getFromContainer(Validator).validateSync(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return getFromContainer(Validator).validateSync(schemaNameOrObject, objectOrValidationOptions);
    }
}
/**
 * Registers a new validation schema.
 */
export function registerSchema(schema) {
    getMetadataStorage().addValidationSchema(schema);
}
//# sourceMappingURL=index.js.map