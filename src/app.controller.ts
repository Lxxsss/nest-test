import { Controller, Get, Response, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }


    @Get('user/:id')
    getUser(@Response() res, @Param('id') id): string {
        return res.json({
            status: {
                code: 0,
                desc: null
            },
            result: {
                user_id: id
            }
        });
    }

}
