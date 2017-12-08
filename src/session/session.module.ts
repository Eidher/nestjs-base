import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { SessionService } from './services/session.service';

@Module({
    modules: [CommonModule],
    components: [SessionService],
    exports: [SessionService],
})
export class SessionModule {}