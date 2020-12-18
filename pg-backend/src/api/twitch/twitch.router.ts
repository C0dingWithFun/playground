import { Router } from 'express';
import { twitchBasicStatsCacheMiddleware } from './basic-stats/basic-stats.cache';
import basicStatsController from './basic-stats/basic-stats.controller';

const twitchRouter = Router();

twitchRouter.get(
  '/basic-stats',
  twitchBasicStatsCacheMiddleware,
  basicStatsController
);

export default twitchRouter;
