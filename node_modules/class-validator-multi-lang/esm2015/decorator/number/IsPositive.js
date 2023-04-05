import { buildMessage, ValidateBy } from '../common/ValidateBy';
import { getText } from '../../multi-lang';
export const IS_POSITIVE = 'isPositive';
/**
 * Checks if the value is a positive number greater than zero.
 */
export function isPositive(value) {
    return typeof value === 'number' && value > 0;
}
/**
 * Checks if the value is a positive number greater than zero.
 */
export function IsPositive(validationOptions) {
    return ValidateBy({
        name: IS_POSITIVE,
        validator: {
            validate: (value, args) => isPositive(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + getText('$property must be a positive number'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsPositive.js.map