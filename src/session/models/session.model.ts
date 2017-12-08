import { BaseModel } from '../../common/models/base.model';
import { User } from '../../users/models/user.model';
import { Type } from 'class-transformer';

export class Session extends BaseModel<Session> {

    @Type(() => User)
    public user: User;

    public decision: object;
}