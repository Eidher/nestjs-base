import { BaseModel } from '../../common/models/base.model';

export class UserName extends BaseModel<UserName> {

    public first: string;

    public middle: string;

    public last: string;
}