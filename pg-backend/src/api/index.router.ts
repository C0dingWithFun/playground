import { Router } from 'express';

import ytSubscribersController from './youtube/yt-subscribers.controller';

const apiRouter = Router();

apiRouter.get('/youtube/subscribers', ytSubscribersController);

export default apiRouter;
