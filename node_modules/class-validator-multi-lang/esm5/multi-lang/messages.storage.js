import { getGlobal } from '../utils/get-global.util';
var CLASS_VALIDATOR_MESSAGES = 'CLASS_VALIDATOR_MESSAGES';
export function getClassValidatorMessagesStorage() {
    var global = getGlobal();
    if (!global[CLASS_VALIDATOR_MESSAGES]) {
        global[CLASS_VALIDATOR_MESSAGES] = {};
    }
    return global[CLASS_VALIDATOR_MESSAGES];
}
export function setClassValidatorMessages(messages) {
    var storageMessages = getClassValidatorMessagesStorage();
    Object.keys(storageMessages).forEach(function (key) { return delete storageMessages[key]; });
    Object.assign(storageMessages, messages);
}
export function getClassValidatorMessages() {
    return getClassValidatorMessagesStorage();
}
export function getClassValidatorMessage(key) {
    var messages = getClassValidatorMessagesStorage();
    return messages[key];
}
//# sourceMappingURL=messages.storage.js.map