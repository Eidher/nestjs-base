import { Component } from '@nestjs/common';
import { ISession } from '../interfaces/session.interface';
import * as expressSession from 'express-session';
import * as connectRedis from 'connect-redis';
import { Session } from '../models/session.model';
import { ConfigService } from '../../common/services/config.service';
import { LoggerService } from '../../common/services/logger.service';

@Component()
export class SessionService implements ISession {

    private sessionObject: any;

    public data: Session;

    constructor(
        private readonly config: ConfigService,
        private readonly logger: LoggerService) {}

    public connect(): object {

        const RedisStore = connectRedis(expressSession);

        // Session configuration
        const sessionConfiguration = {
            secret: this.config.session.secret,
            resave: this.config.session.resave,
            store: new RedisStore({
                host: this.config.redis.path,
                port: this.config.redis.port,
                logErrors: (err) => {
                    this.logger.error('Error: connect-redis reported a client error', err);
                },
            }),
            saveUninitialized: this.config.session.saveUninitialized,
            cookie: {
                maxAge: this.config.session.cookie.maxAge,
                path: this.config.session.cookie.path,
                httpOnly: this.config.session.cookie.path,
                domain: this.config.session.cookie.domain || '',
            },
        };

        return expressSession(sessionConfiguration);
    }

    public setSessionObject(session: object): void {
        this.sessionObject = session;
        this.load();
    }

    private getSessionObject(): any {
        return this.sessionObject;
    }

    private load() {
        const session = Object.assign({}, this.getSessionObject());
        if (session.hasOwnProperty('cookie')) {
            delete session.cookie;
        }
        this.data = new Session(session);
    }

    public save() {
        const sessionObj = this.data.toPlainObject();
        Object.assign(this.getSessionObject(), sessionObj);
    }

}