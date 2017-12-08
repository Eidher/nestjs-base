import { RequestHandler } from '_debugger';
import { Session } from '../models/session.model';

export interface ISession {
    data: Session;
    connect(): object;
    setSessionObject: (session: object) => void;
    save: () => void;
}