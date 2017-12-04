import * as conf from '@flexshopper/flex-config';
import { Component } from '@nestjs/common';

@Component()
export class ConfigService {

    public get config(): conf {
        return conf;
    }

    public get port(): number {
        return conf.port;
    }

    public get flexSdk(): {host: string, key: string, secret: string}{
        return conf.flexSdk;
    }

    public get pagerduty(): {enabled: boolean} {
        return conf.pagerduty;
    }

}