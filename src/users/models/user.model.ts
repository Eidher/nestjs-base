import { UserName } from './user-name.model';
import { BaseModel } from '../../common/models/base.model' ;
import { Type } from 'class-transformer';

export class User extends BaseModel<User> {

    @Type(() => UserName)
    public name: UserName;

    public email: string;

    public password: string;
}