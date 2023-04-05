import { setClassValidatorPropertyTitle, setClassValidatorTitle } from './titles.storage';
export function ClassPropertyTitle(title) {
    return function (object, propertyName) {
        setClassValidatorPropertyTitle(object, propertyName, title);
    };
}
export function ClassTitle(title, key) {
    return function (object) {
        setClassValidatorTitle(object, key, title);
    };
}
//# sourceMappingURL=title.decorator.js.map