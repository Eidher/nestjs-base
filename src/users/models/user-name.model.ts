import { BaseModel } from "../../common/models/base.model";

export class UserName extends BaseModel {

    readonly first: string;
    
    readonly middle: string;

    readonly last: string;
}