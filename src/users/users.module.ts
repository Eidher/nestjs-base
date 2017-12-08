import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { CommonModule } from '../common/common.module';
import { SessionModule } from '../session/session.module';

@Module({
    modules: [
        CommonModule,
        SessionModule,
    ],
    controllers: [UsersController],
    components: [UsersService],
})
export class UsersModule {}