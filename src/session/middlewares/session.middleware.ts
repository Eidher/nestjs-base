import { Middleware } from '@nestjs/common';
import { NestMiddleware, ExpressMiddleware } from '@nestjs/common/interfaces';
import { SessionService } from '../services/session.service';

@Middleware()
export class SessionMiddleware implements NestMiddleware {

    constructor(private readonly session: SessionService) {}

    resolve(): ExpressMiddleware {
        return (req, res, next) => {
            this.session.setSessionObject(req.session);
            next();
        };
    }
}