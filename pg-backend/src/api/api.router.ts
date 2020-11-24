import { Router } from 'express';
import twitchRouter from './twitch/twitch.router';

import youtubeRouter from './youtube/youtube.router';

const apiRouter = Router();

/**
 * @swagger
 * tags:
 *   -  name: YouTube
 *      description: Routes for YouTube data
 */

apiRouter.use('/youtube', youtubeRouter);

apiRouter.use('/twitch', twitchRouter);

export default apiRouter;
