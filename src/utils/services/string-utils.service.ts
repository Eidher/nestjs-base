import * as _ from 'lodash';
import { Component } from '@nestjs/common';

@Component()
export class StringUtils {

    public hyphenCase(text) {
        return _.chain(text).snakeCase().replace('_', '-').value();
    }

    public replace(string: string, pattern: string|RegExp, replace: _.ReplaceFunction|string): string {
        return _.replace(string, pattern, replace);
    }

    public split(string: string, separator?: string|RegExp, limit?: number): string[] {
        return _.split(string, separator, limit);
    }

    public head(array: any[]): any {
        return _.head(array);
    }
}