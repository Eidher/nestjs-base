import { Module, RequestMethod } from '@nestjs/common';
import { CatsModule } from '../cats/cats.module';
import { NestModule, MiddlewaresConsumer } from '@nestjs/common/interfaces';
import { LoggerMiddleware } from '../common/middlewares/logger.middleware';
import { UsersModule } from '../users/users.module';
import { ValidationModule } from '../validation/validation.module';
import { UtilsModule } from '../utils/utils.module';

@Module({
    modules: [
        CatsModule,
        UsersModule,
        ValidationModule,
        UtilsModule,
    ],
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(
            { path: '/cats', method: RequestMethod.GET },
            { path: '/cats', method: RequestMethod.POST },
        );
    }
}