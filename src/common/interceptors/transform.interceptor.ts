import { Interceptor, HttpStatus } from '@nestjs/common';
import { NestInterceptor, ExecutionContext } from '@nestjs/common/interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Interceptor()
export class TransformInterceptor implements NestInterceptor {
    intercept(request, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
        return stream$.map((data) => ({ statusCode: 200, data }));
    }
}