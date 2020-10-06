import { Router } from 'express';

import youtubeRouter from './youtube/youtube.router';

const apiRouter = Router();

apiRouter.use('/youtube', youtubeRouter);

export default apiRouter;
