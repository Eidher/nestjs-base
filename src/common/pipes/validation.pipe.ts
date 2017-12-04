import { Pipe } from '@nestjs/common';
import { PipeTransform, ArgumentMetadata } from '@nestjs/common/interfaces';
import { ValidationException } from '../exceptions/validation.exception';
import { ValidationService } from '../../validation/services/validation.service';
import { StringUtils } from '../../utils/services/string-utils.service';
import { LoggerService } from '../services/logger.service';

@Pipe()
export class ValidationPipe implements PipeTransform<any> {

    private readonly validationService: ValidationService;
    private readonly stringUtils: StringUtils;
    private readonly logger: LoggerService;

    constructor() {
        this.stringUtils = new StringUtils();
        this.validationService = new ValidationService(this.stringUtils);
        this.logger = new LoggerService();
    }

    async transform(value: any, metadata: ArgumentMetadata) {

        const { metatype } = metadata;

        if (!metatype || !metatype.name || !this.toValidate(metatype)) {
            return value;
        }

        try {
            await this.validationService.validate(value, metatype.name);
        } catch (errors) {
            this.logger.warn(errors.message);
            throw new ValidationException(this.stringUtils.replace(errors.message, /\"/g, '\''));
        }

        return value;

    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }
}