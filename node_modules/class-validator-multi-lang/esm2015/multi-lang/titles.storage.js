import { getGlobal } from '../utils/get-global.util';
const CLASS_VALIDATOR_PROPERTY_TITLES = 'CLASS_VALIDATOR_PROPERTY_TITLES';
const CLASS_VALIDATOR_TITLES = 'CLASS_VALIDATOR_TITLES';
const CLASS_VALIDATOR_ROOT_TITLE = 'CLASS_VALIDATOR_ROOT_TITLE';
// PROPERTY
export function getClassValidatorPropertyTitlesStorage() {
    const global = getGlobal();
    if (!global[CLASS_VALIDATOR_PROPERTY_TITLES]) {
        global[CLASS_VALIDATOR_PROPERTY_TITLES] = [];
    }
    return global[CLASS_VALIDATOR_PROPERTY_TITLES];
}
export function setClassValidatorPropertyTitle(object, propertyName, title) {
    const storagePropertyTitle = getClassValidatorPropertyTitlesStorage();
    let obj = storagePropertyTitle.find(o => o.target === object.constructor);
    if (!obj) {
        obj = { target: object.constructor, titles: new Map() };
        storagePropertyTitle.push(obj);
    }
    obj.titles.set(propertyName, title);
}
export function getClassValidatorPropertyTitles(object) {
    const storagePropertyTitle = getClassValidatorPropertyTitlesStorage();
    const obj = storagePropertyTitle.find(o => o.target === object.constructor);
    if (!obj) {
        return new Map();
    }
    return obj.titles;
}
export function getClassValidatorPropertyTitle(object, propertyName) {
    const titles = getClassValidatorPropertyTitles(object);
    return titles.get(propertyName);
}
// CLASS
export function getClassValidatorTitlesStorage() {
    const global = getGlobal();
    if (!global[CLASS_VALIDATOR_TITLES]) {
        global[CLASS_VALIDATOR_TITLES] = [];
    }
    return global[CLASS_VALIDATOR_TITLES];
}
export function setClassValidatorTitle(object, propertyName, title) {
    const storageTitle = getClassValidatorTitlesStorage();
    let obj = storageTitle.find(o => o.target === object);
    if (!obj) {
        obj = { target: object, titles: new Map() };
        storageTitle.push(obj);
    }
    obj.titles.set(propertyName || CLASS_VALIDATOR_ROOT_TITLE, title);
}
export function getClassValidatorTitles(object) {
    const storageTitle = getClassValidatorTitlesStorage();
    const obj = storageTitle.find(o => o.target === object.constructor);
    if (!obj) {
        return new Map();
    }
    return obj.titles;
}
export function getClassValidatorTitle(object, propertyName) {
    const titles = getClassValidatorTitles(object);
    return titles.get(propertyName || CLASS_VALIDATOR_ROOT_TITLE);
}
//# sourceMappingURL=titles.storage.js.map