import { Catch, HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/core/exceptions/http-exception";
import { ExceptionFilter } from "@nestjs/common/interfaces";
import { ValidationException } from "../exceptions/validation.exception";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, response) {
        const status = exception.getStatus();
        console.log(`Exception: ${exception.getResponse()}`);

        let message, error;

        switch (exception.constructor.name) {
            case 'ValidationException': 
                message = exception.getResponse();
                error = message;
                message = 'Bad Request';
            break;

            case 'ForbiddenException': 
                message = exception.getResponse();
                error = 'Not allowed to perform this action.';
            break;

            default:
                message = 'An unexpected error occurred.'
            break;
        }

        response.status(status).json({
            statusCode: status || 400,
            message: message,
            error: error || message
        });
    }
}