import { Interceptor } from '@nestjs/common';
import { NestInterceptor, ExecutionContext } from '@nestjs/common/interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Interceptor()
export class LoggingInterceptor implements NestInterceptor {
    intercept(request, contexts: ExecutionContext, stream$: Observable<any>): Observable<any> {
        console.log('Before...');
        const now = Date.now();

        return stream$.do(
            () => console.log(`After... ${Date.now() - now}ms`),
        );
    }
}