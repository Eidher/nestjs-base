import * as _ from "lodash";

export class StringUtils {
    hyphenCase(text) {
        return _
        .chain(text)
        .snakeCase()
        .replace('_', '-')
        .value()
    }

    replace(string: string, pattern: string|RegExp, replace: _.ReplaceFunction|string): string {
        return _.replace(string, pattern, replace);
    }

    split(string :string, separator?: string|RegExp, limit?: number): string[] {
        return _.split(string, separator, limit);
    }

    head(array: any[]): any {
        return _.head(array);
    }
}