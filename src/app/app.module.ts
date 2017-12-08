import { Module, RequestMethod } from '@nestjs/common';
import { CatsModule } from '../cats/cats.module';
import { NestModule, MiddlewaresConsumer } from '@nestjs/common/interfaces';
import { UsersModule } from '../users/users.module';
import { SessionMiddleware } from '../session/middlewares/session.middleware';
import { SessionModule } from '../session/session.module';

@Module({
    modules: [
        CatsModule,
        UsersModule,
        SessionModule,
    ],
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(SessionMiddleware).forRoutes(
            { path: '/**', method: RequestMethod.ALL },
        );
    }
}