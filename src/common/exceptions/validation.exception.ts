import { HttpException } from "@nestjs/core/exceptions/http-exception";
import { HttpStatus } from "@nestjs/common";


export class ValidationException extends HttpException {
    constructor(errors) {

        let response;

        const getErrors = (errors) => {
            return errors.map((error) => {
                if (error.children.length) {
                    return { [error.property]: getErrors(error.children)}
                } 
    
                return { [error.property]: error.constraints };
            });
        }

        if (Array.isArray(errors)) {
            response = getErrors(errors);
        } else {
            response = errors || 'Validation error.';
        }

        super(response, HttpStatus.BAD_REQUEST);
    }

    
}