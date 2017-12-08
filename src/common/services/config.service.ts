import * as conf from '@flexshopper/flex-config';
import { Component } from '@nestjs/common';
import { IConfigSession } from '../interfaces/config-session.interface';

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

    public get redis(): {path: string, port: number} {
        return conf.redis;
    }

    public get session(): IConfigSession {
        return conf.session;
    }

}