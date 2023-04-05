import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isCreditCardValidator from 'validator/lib/isCreditCard';
import { getText } from '../../multi-lang';
export var IS_CREDIT_CARD = 'isCreditCard';
/**
 * Checks if the string is a credit card.
 * If given value is not a string, then it returns false.
 */
export function isCreditCard(value) {
    return typeof value === 'string' && isCreditCardValidator(value);
}
/**
 * Checks if the string is a credit card.
 * If given value is not a string, then it returns false.
 */
export function IsCreditCard(validationOptions) {
    return ValidateBy({
        name: IS_CREDIT_CARD,
        validator: {
            validate: function (value, args) { return isCreditCard(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + getText('$property must be a credit card'); }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsCreditCard.js.map