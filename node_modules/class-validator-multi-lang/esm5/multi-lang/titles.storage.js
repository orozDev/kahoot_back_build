import { getGlobal } from '../utils/get-global.util';
var CLASS_VALIDATOR_PROPERTY_TITLES = 'CLASS_VALIDATOR_PROPERTY_TITLES';
var CLASS_VALIDATOR_TITLES = 'CLASS_VALIDATOR_TITLES';
var CLASS_VALIDATOR_ROOT_TITLE = 'CLASS_VALIDATOR_ROOT_TITLE';
// PROPERTY
export function getClassValidatorPropertyTitlesStorage() {
    var global = getGlobal();
    if (!global[CLASS_VALIDATOR_PROPERTY_TITLES]) {
        global[CLASS_VALIDATOR_PROPERTY_TITLES] = [];
    }
    return global[CLASS_VALIDATOR_PROPERTY_TITLES];
}
export function setClassValidatorPropertyTitle(object, propertyName, title) {
    var storagePropertyTitle = getClassValidatorPropertyTitlesStorage();
    var obj = storagePropertyTitle.find(function (o) { return o.target === object.constructor; });
    if (!obj) {
        obj = { target: object.constructor, titles: new Map() };
        storagePropertyTitle.push(obj);
    }
    obj.titles.set(propertyName, title);
}
export function getClassValidatorPropertyTitles(object) {
    var storagePropertyTitle = getClassValidatorPropertyTitlesStorage();
    var obj = storagePropertyTitle.find(function (o) { return o.target === object.constructor; });
    if (!obj) {
        return new Map();
    }
    return obj.titles;
}
export function getClassValidatorPropertyTitle(object, propertyName) {
    var titles = getClassValidatorPropertyTitles(object);
    return titles.get(propertyName);
}
// CLASS
export function getClassValidatorTitlesStorage() {
    var global = getGlobal();
    if (!global[CLASS_VALIDATOR_TITLES]) {
        global[CLASS_VALIDATOR_TITLES] = [];
    }
    return global[CLASS_VALIDATOR_TITLES];
}
export function setClassValidatorTitle(object, propertyName, title) {
    var storageTitle = getClassValidatorTitlesStorage();
    var obj = storageTitle.find(function (o) { return o.target === object; });
    if (!obj) {
        obj = { target: object, titles: new Map() };
        storageTitle.push(obj);
    }
    obj.titles.set(propertyName || CLASS_VALIDATOR_ROOT_TITLE, title);
}
export function getClassValidatorTitles(object) {
    var storageTitle = getClassValidatorTitlesStorage();
    var obj = storageTitle.find(function (o) { return o.target === object.constructor; });
    if (!obj) {
        return new Map();
    }
    return obj.titles;
}
export function getClassValidatorTitle(object, propertyName) {
    var titles = getClassValidatorTitles(object);
    return titles.get(propertyName || CLASS_VALIDATOR_ROOT_TITLE);
}
//# sourceMappingURL=titles.storage.js.map