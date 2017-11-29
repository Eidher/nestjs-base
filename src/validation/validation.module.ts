import { Module } from '@nestjs/common';
import { ValidationService } from './services/validation.service';
import { UtilsModule } from '../utils/utils.module';

@Module({
    modules: [UtilsModule],
    components: [ValidationService],
    exports: [ValidationService],
})
export class ValidationModule {}