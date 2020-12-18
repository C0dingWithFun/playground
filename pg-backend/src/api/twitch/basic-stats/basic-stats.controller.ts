import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import redisClient from '../../../redis.db';
import { ERedisKeys } from '../../../constants';

import {
  __TWITCH_CLIENT_ID__,
  __TWITCH_CLIENT_SECRET__,
  __TWITCH_OAUTH__,
} from '../../../constants';

const basicStatsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: refactor OAuth and user ID Workflow
  await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${__TWITCH_CLIENT_ID__}&client_secret=${__TWITCH_CLIENT_SECRET__}&grant_type=client_credentials`,
    {
      method: 'POST',
    }
  )
    .then((res) => res.json())
    .then(async (data) => {
      await fetch('https://api.twitch.tv/helix/users?login=CodingWithFun', {
        headers: {
          'Client-ID': __TWITCH_CLIENT_ID__ as string,
          Authorization: `Bearer ${data.access_token}`,
        },
      })
        .then((res) => res.json())
        .then(async (stats) => {
          await fetch(
            `https://api.twitch.tv/helix/users/follows?to_id=${stats?.data[0]?.id}`,
            {
              headers: {
                'Client-ID': __TWITCH_CLIENT_ID__ as string,
                Authorization: `Bearer ${data.access_token}`,
              },
            }
          )
            .then((res) => res.json())
            .then((followersStats) => {
              res.status(200);
              const responseObject = {
                ...stats?.data[0],
                followers: followersStats.total,
              };

              // Setting value to cache
              redisClient.setex(
                ERedisKeys.TwitchStats,
                15 * 60,
                JSON.stringify(responseObject)
              );

              res.json({
                message: 'Successfully fetched Twitch basic Stats',
                data: { ...JSON.parse(data) },
                requestedURL: req.originalUrl,
              });
              return;
            })
            .catch((err) => next(err));
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};

export default basicStatsController;
