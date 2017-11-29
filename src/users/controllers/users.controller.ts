import { Controller, Post, Patch, Body, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersCreateDto } from "../dtos/users-create.dto";
import { UsersService } from "../services/users.service";
import { Roles } from "../../common/decorators/roles.decorator";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() user: UsersCreateDto) {
        this.usersService.create(user);
    }

    @Patch()
    @Roles('user')
    update(user: UsersCreateDto) {
        
    }
}