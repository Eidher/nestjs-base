import { Interceptor, HttpStatus } from "@nestjs/common";
import { NestInterceptor, ExecutionContext } from "@nestjs/common/interfaces";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { HttpException } from "@nestjs/core/exceptions/http-exception";

@Interceptor()
export class TransformInterceptor implements NestInterceptor {
    intercept(request, context: ExecutionContext, stream$: Observable<any>): Observable<any> {

        return stream$.map((data) => ({ statusCode: 200, data }));
    }
}