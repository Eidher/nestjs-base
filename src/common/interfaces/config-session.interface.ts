import { IConfigSessionCookie } from './config-session-cookie.interface';

export interface IConfigSession {
    readonly secret: string;
    readonly resave: boolean;
    readonly saveUninitialized: boolean;
    readonly cookie: IConfigSessionCookie;
}