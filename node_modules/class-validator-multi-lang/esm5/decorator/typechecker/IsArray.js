import { buildMessage, ValidateBy } from '../common/ValidateBy';
import { getText } from '../../multi-lang';
export var IS_ARRAY = 'isArray';
/**
 * Checks if a given value is an array
 */
export function isArray(value) {
    return Array.isArray(value);
}
/**
 * Checks if a given value is an array
 */
export function IsArray(validationOptions) {
    return ValidateBy({
        name: IS_ARRAY,
        validator: {
            validate: function (value, args) { return isArray(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + getText('$property must be an array'); }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsArray.js.map