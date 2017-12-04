import { Module } from '@nestjs/common';
import { FlexSdkService } from './services/flex-sdk.service';
import { LoggerService } from './services/logger.service';
import { ConfigService } from './services/config.service';

@Module({
    components: [
        FlexSdkService,
        LoggerService,
        ConfigService,
    ],
    exports: [
        FlexSdkService,
        LoggerService,
        ConfigService,
    ],
})
export class CommonModule {}