import { Router } from 'express';
import { ytSubsCacheMiddleware } from './subscribers/yt-subscribers.cache';

import ytSubscribersController from './subscribers/yt-subscribers.controller';

const youtubeRouter = Router();

youtubeRouter.get('/subscribers', ytSubsCacheMiddleware, ytSubscribersController);

export default youtubeRouter;
