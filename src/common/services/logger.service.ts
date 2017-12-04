import { Component } from '@nestjs/common';
import * as logger from '@flexshopper/logger';
import { LeveledLogMethod } from 'winston';

@Component()
export class LoggerService {

    public critical: LeveledLogMethod;
    public error: LeveledLogMethod;
    public warn: LeveledLogMethod;
    public info: LeveledLogMethod;
    public verbose: LeveledLogMethod;
    public debug: LeveledLogMethod;

    constructor() {
        this.critical = logger.critical,
        this.error = logger.error,
        this.warn = logger.warn,
        this.info = logger.info,
        this.verbose = logger.verbose,
        this.debug = logger.debug;
    }
}