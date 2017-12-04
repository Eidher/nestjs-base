import * as bodyParser from 'body-parser';
import { NestFactory, Reflector } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { RolesGuard } from './common/guards/roles.guard';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { ConfigService } from './common/services/config.service';

async function bootstrap() {

  const app = await NestFactory.create(ApplicationModule);
  const config = new ConfigService();

  app.use(bodyParser.json());

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalGuards(new RolesGuard(new Reflector()));

  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(config.port);
}

bootstrap();
