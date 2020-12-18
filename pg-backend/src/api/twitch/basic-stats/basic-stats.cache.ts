import { NextFunction, Request, Response } from 'express';
import redisClient from '../../../redis.db';
import { ERedisKeys } from '../../../constants';

/**
 * Cache Middleware for /api/v1/youtube/subscribers endpoint
 * and returns cached channel subscribers if it exists in redis database
 * @param {Express.Request} req Express Request object
 * @param {Express.Response} res Express Response object
 * @param {NextFunction} next Express Next Function
 */
export const twitchBasicStatsCacheMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  redisClient.get(ERedisKeys.TwitchStats, (err, data) => {
    // error case
    if (err) {
      next(err);
      return;
    }
    // uncached case
    if (!data) {
      next();
      return;
    }
    // cached case
    res.status(200);
    res.json({
      message: 'Successfully fetched Twitch Stats',
      data: JSON.parse(data),
      isCached: true,
      requestedURL: req.originalUrl,
    });
  });
};

export default {
  twitchBasicStatsCacheMiddleware,
};
