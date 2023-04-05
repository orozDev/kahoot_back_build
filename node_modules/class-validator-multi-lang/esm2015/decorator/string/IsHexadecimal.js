import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isHexadecimalValidator from 'validator/lib/isHexadecimal';
import { getText } from '../../multi-lang';
export const IS_HEXADECIMAL = 'isHexadecimal';
/**
 * Checks if the string is a hexadecimal number.
 * If given value is not a string, then it returns false.
 */
export function isHexadecimal(value) {
    return typeof value === 'string' && isHexadecimalValidator(value);
}
/**
 * Checks if the string is a hexadecimal number.
 * If given value is not a string, then it returns false.
 */
export function IsHexadecimal(validationOptions) {
    return ValidateBy({
        name: IS_HEXADECIMAL,
        validator: {
            validate: (value, args) => isHexadecimal(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + getText('$property must be a hexadecimal number'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsHexadecimal.js.map