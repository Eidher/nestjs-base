import { Component } from '@nestjs/common';
import * as Joi from 'joi';
import { StringUtils } from '../../utils/services/string-utils.service';

@Component()
export class ValidationService {

    constructor(private readonly stringUtils: StringUtils) {}

    async validate(value: any, className: string, ...args: any[]) {

        const schemaName = this.getSchemaName(className);
        const folder = this.getFolderName(schemaName);
        const schema = await import(`../schemas/${folder}/${schemaName}.schema`);

        return await Joi.validate(value, schema.default, ...args);
    }

    private getSchemaName(className): string {
        const schemaName = this.stringUtils.replace(className, 'Dto', '');
        return this.stringUtils.hyphenCase(schemaName);
    }

    private getFolderName(schemaName: string): string {
        const array = this.stringUtils.split(schemaName, '-', 1);
        return this.stringUtils.head(array);
    }
}