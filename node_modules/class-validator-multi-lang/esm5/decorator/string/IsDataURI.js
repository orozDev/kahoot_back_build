import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isDataURIValidator from 'validator/lib/isDataURI';
import { getText } from '../../multi-lang';
export var IS_DATA_URI = 'isDataURI';
/**
 * Check if the string is a data uri format.
 * If given value is not a string, then it returns false.
 */
export function isDataURI(value) {
    return typeof value === 'string' && isDataURIValidator(value);
}
/**
 * Check if the string is a data uri format.
 * If given value is not a string, then it returns false.
 */
export function IsDataURI(validationOptions) {
    return ValidateBy({
        name: IS_DATA_URI,
        validator: {
            validate: function (value, args) { return isDataURI(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + getText('$property must be a data uri format'); }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsDataURI.js.map