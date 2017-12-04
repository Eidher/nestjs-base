import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { CommonModule } from '../common/common.module';

@Module({
    modules: [CommonModule],
    controllers: [UsersController],
    components: [UsersService],
})
export class UsersModule {}