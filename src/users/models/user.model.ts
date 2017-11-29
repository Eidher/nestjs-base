import { UserName } from "./user-name.model";
import { BaseModel } from "../../common/models/base.model";

export class User extends BaseModel {
    
    readonly name: UserName;
    
    readonly email: string;

    readonly username: string;

    readonly password: string;

    readonly hearAbout: string;

    readonly marketingEmail: string;
}