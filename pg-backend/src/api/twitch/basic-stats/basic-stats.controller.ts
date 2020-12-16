import { NextFunction, Response } from 'express';
import fetch from 'node-fetch';

import {
  __TWITCH_CLIENT_ID__,
  __TWITCH_CLIENT_SECRET__,
  __TWITCH_OAUTH__,
} from '../../../constants';

const basicStatsController = async (_, res: Response, next: NextFunction) => {
  // const response = await twitchClient.getChannels();
  // res.json({ response });
  // twitchClient.api(
  //   {
  //     url: 'https://api.twitch.tv/kraken/',
  //     headers: {
  //       'Client-ID': '1dac77895e8f56fa1a71e7c43ef09d87',
  //     },
  //   },
  //   (err, res, body) => {
  //     console.log(body);
  //   }
  // );

  // await fetch('https://api.twitch.tv/helix/users/follows?to_id=<user ID>', {
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
              res.json({ ...stats?.data[0], followers: followersStats.total });
              return;
            })
            .catch((err) => next(err));
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};

export default basicStatsController;
