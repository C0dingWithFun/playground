import { Router } from 'express';
import basicStatsController from './basic-stats/basic-stats.controller';

const twitchRouter = Router();

twitchRouter.get('/basic-stats', basicStatsController);

export default twitchRouter;
