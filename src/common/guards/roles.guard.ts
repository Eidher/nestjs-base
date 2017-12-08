import { Guard, Session } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common/interfaces';
import { Observable } from 'rxjs/Observable';
import { Reflector } from '@nestjs/core';
import { ForbiddenException } from '../exceptions/forbidden.exception';

@Guard()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(req, context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const { parent, handler } = context;
        const roles = this.reflector.get<string[]>('roles', handler);
        if (!roles) {
            return true;
        }

        const user = req.user;
        const hasRole = () => !!user.roles.find((role) => !!role.find((item) => item === role));
        if (user && user.roles && hasRole()) {
            return true;
        }

        // throw new ForbiddenException();
        return true;

    }
}