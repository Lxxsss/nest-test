import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { ReqMiddleware } from './middleware/req.middleware';

@Module({
    imports: [],
    controllers: [AppController, UserController],
    providers: [AppService, UserService],
})
export class AppModule {

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ReqMiddleware).forRoutes(UserController);
    }
}
