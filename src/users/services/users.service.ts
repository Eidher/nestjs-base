import { Component } from '@nestjs/common';
import { User } from '../models/user.model';
import { SessionService } from '../../session/services/session.service';
import { FlexSdkService } from '../../common/services/flex-sdk.service';

@Component()
export class UsersService {

    constructor(
        private readonly session: SessionService,
        private readonly flexSdk: FlexSdkService,
    ) {}

    async create(user: User) {
        const data = {
            data: user,
        };
        const resp = await this.flexSdk.user.createUser(data);
    }
}