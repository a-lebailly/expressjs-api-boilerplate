import { Request, Response } from 'express';
import indexService from '../services/indexService';

class IndexController {
    index(req: Request, res: Response) {
        res.status(200).json({
            message: indexService.sayHelloWorld(),
        });
    }
}

export default new IndexController();
