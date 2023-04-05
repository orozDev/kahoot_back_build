interface ClassValidatorTitle {
    target: object;
    titles: Map<string | symbol, string>;
}
interface ClassValidatorPropertyTitle {
    target: object;
    titles: Map<string | symbol, string>;
}
export declare function getClassValidatorPropertyTitlesStorage(): ClassValidatorPropertyTitle[];
export declare function setClassValidatorPropertyTitle(object: object, propertyName: string | symbol, title: string): void;
export declare function getClassValidatorPropertyTitles(object: object): ClassValidatorPropertyTitle['titles'];
export declare function getClassValidatorPropertyTitle(object: object, propertyName: string): string | undefined;
export declare function getClassValidatorTitlesStorage(): ClassValidatorTitle[];
export declare function setClassValidatorTitle(object: object, propertyName: string | undefined, title: string): void;
export declare function getClassValidatorTitles(object: object): ClassValidatorTitle['titles'];
export declare function getClassValidatorTitle(object: object, propertyName: string | symbol | undefined): string | undefined;
export {};
