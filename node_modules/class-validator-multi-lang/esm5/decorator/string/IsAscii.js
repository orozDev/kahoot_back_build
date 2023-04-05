import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isAsciiValidator from 'validator/lib/isAscii';
import { getText } from '../../multi-lang';
export var IS_ASCII = 'isAscii';
/**
 * Checks if the string contains ASCII chars only.
 * If given value is not a string, then it returns false.
 */
export function isAscii(value) {
    return typeof value === 'string' && isAsciiValidator(value);
}
/**
 * Checks if the string contains ASCII chars only.
 * If given value is not a string, then it returns false.
 */
export function IsAscii(validationOptions) {
    return ValidateBy({
        name: IS_ASCII,
        validator: {
            validate: function (value, args) { return isAscii(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + getText('$property must contain only ASCII characters'); }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsAscii.js.map