import { NextFunction, Request, Response } from 'express';
import redisClient from '../../../redis.db';

export const ytSubsCacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // if value exists in redis, return it in response
  // remove channel details from response
  // way to get/generate same response here as well
  redisClient.get('yt-subscribers', (err, response) => {
    // error case
    if (err) {
      next(err);
      return;
    }
    // uncached case
    if (!response) {
      next();
      return;
    }
    // cached case
    res.status(200);
    res.json({
      message: 'Successfully fetched subscribers count',
      data: { response },
      requestedURL: req.originalUrl,
    });
  });
};

export default {
  ytSubsCacheMiddleware,
};
