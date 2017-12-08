import { classToPlain, plainToClassFromExist } from 'class-transformer';

export class BaseModel<T extends BaseModel<T>> {

    constructor(data?: Partial<T>) {
        this.populate(data);
    }

    public populate(value?: Partial<T>): void {

        if (value) {
            plainToClassFromExist(this, value);
        }
    }

    public toPlainObject(): object {
        return classToPlain(this);
    }
}