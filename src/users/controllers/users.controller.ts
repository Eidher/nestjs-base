import { Controller, Post, Patch, Body, UsePipes, ValidationPipe, UseInterceptors } from '@nestjs/common';
import { UsersCreateDto } from '../dtos/users-create.dto';
import { UsersService } from '../services/users.service';
import { Roles } from '../../common/decorators/roles.decorator';
import { SessionInterceptor } from '../../session/interceptors/session.interceptor';

@Controller('users')
@UseInterceptors(SessionInterceptor)
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() user: UsersCreateDto) {
        await this.usersService.create(user);
        console.log('After Create Controller');
    }

    @Patch()
    @Roles('user')
    update(user: UsersCreateDto) {

    }
}