import { ConfigService } from './config.service';
import * as FlexSdk from '@flexshopper/node-sdk';
import { Component } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Component()
export class FlexSdkService extends FlexSdk {

    constructor(private readonly config: ConfigService,
                private readonly logger: LoggerService) {

        super({
            host: config.flexSdk.host,
            key: config.flexSdk.key,
            secret: config.flexSdk.secret,
        });

        logger.info('Hello Logger!');
        logger.error('Hello Lgger!', {level: 'error'});
    }
}