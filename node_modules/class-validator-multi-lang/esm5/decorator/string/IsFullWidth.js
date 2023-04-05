import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isFullWidthValidator from 'validator/lib/isFullWidth';
import { getText } from '../../multi-lang';
export var IS_FULL_WIDTH = 'isFullWidth';
/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 */
export function isFullWidth(value) {
    return typeof value === 'string' && isFullWidthValidator(value);
}
/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 */
export function IsFullWidth(validationOptions) {
    return ValidateBy({
        name: IS_FULL_WIDTH,
        validator: {
            validate: function (value, args) { return isFullWidth(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + getText('$property must contain a full-width characters'); }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsFullWidth.js.map