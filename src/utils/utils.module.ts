import { Module } from '@nestjs/common';
import { StringUtils } from './services/string-utils.service';

@Module({
    components: [StringUtils],
    exports: [StringUtils],
})
export class UtilsModule {}