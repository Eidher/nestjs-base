import { NestFactory, Reflector } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { ApplicationModule } from './app/app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { RolesGuard } from './common/guards/roles.guard';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { ConfigService } from './common/services/config.service';
import { LoggerService } from './common/services/logger.service';
import { SessionService } from './session/services/session.service';
import { SessionInterceptor } from './session/interceptors/session.interceptor';
import { ISession } from './session/interfaces/session.interface';

async function bootstrap() {

  const app = await NestFactory.create(ApplicationModule);
  const config = new ConfigService();
  const session: ISession = new SessionService(config,  new LoggerService());

  // trust first proxy
  // app.set('trust proxy', 1);

  app.use(bodyParser.json());
  app.use(session.connect());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(config.port);
}

bootstrap();
