import { Controller, Get, Post, Body, UseGuards, UseInterceptors } from "@nestjs/common";
import { CreateCatDto } from "../dtos/create-cat.dto";
import { CatsService } from "../services/cats.service";
import { Cat } from "../interfaces/cat.interface";
import { Roles } from "../../common/decorators/roles.decorator";
import { RolesGuard } from "../../common/guards/roles.guard";
import { LoggingInterceptor } from "../../common/interceptors/logging.interceptor";

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Post()
    @Roles('admin')
    async create(@Body() cat: CreateCatDto) {
        this.catsService.create(cat);
    }
}