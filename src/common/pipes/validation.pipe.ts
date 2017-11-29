import { Pipe } from "@nestjs/common";
import { PipeTransform, ArgumentMetadata } from "@nestjs/common/interfaces";
import { ValidationException } from "../exceptions/validation.exception";
import { ValidationService } from "../../validation/services/validation.service";
import { StringUtils } from "../../utils/services/string-utils.service";


@Pipe()
export class ValidationPipe implements PipeTransform<any> {

    private readonly validationService: ValidationService;
    private readonly stringUtils: StringUtils;

    constructor() {
        this.stringUtils = new StringUtils();
        this.validationService = new ValidationService(this.stringUtils);
    }

    async transform(value: any, metadata: ArgumentMetadata) {
        
        const { metatype } = metadata;
        
        if (!metatype || !metatype.name || !this.toValidate(metatype)) {
            return value;
        }

        try {
            await this.validationService.validate(value, metatype.name);   
        } catch (errors) {
            console.log(errors)
            throw new ValidationException(this.stringUtils.replace(errors.message, /\"/g, "'"));
        }
        
        return value;

    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }
}