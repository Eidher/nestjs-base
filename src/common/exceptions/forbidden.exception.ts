import { HttpException } from "@nestjs/core/exceptions/http-exception";
import { HttpStatus } from "@nestjs/common";


export class ForbiddenException extends HttpException {
    constructor() {
        super('Unauthorized', HttpStatus.FORBIDDEN);
    }
}