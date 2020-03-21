import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.interface';
import { CreateUserDto } from 'src/user/create-user-dto.decorator';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }


    // @Post('create')
    // async create(@Body() createUserDto: CreateUserDto) {
    //     return this.userService.create(createUserDto);
    // }

    @Get('/:id')
    async findById(@Param('id') id): Promise<object> {
        return {
            status: {
                code: 0,
                desc: null
            },
            result: {
                user_id: id
            }
        };
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

}
