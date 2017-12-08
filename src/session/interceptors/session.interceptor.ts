import { Interceptor } from '@nestjs/common';
import { NestInterceptor, ExecutionContext } from '@nestjs/common/interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { SessionService } from '../services/session.service';

@Interceptor()
export class SessionInterceptor implements NestInterceptor {

    constructor(private readonly session: SessionService) {}

    intercept(req, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
        return stream$.do(() => {
            this.session.save();
        });
    }
}