import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ReqMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        console.log('params: ', req.params);
        console.log('body: ', req.body);
        next();
    }
}
