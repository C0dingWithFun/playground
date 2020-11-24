import { Response } from 'express';
import fetch from 'node-fetch';

import { __TWITCH_CLIENT_ID__, __TWITCH_OAUTH__ } from '../../../constants';

const basicStatsController = async (_, res: Response) => {
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
  await fetch('https://api.twitch.tv/helix/users?login=CodingWithFun', {
    headers: {
      'Client-ID': __TWITCH_CLIENT_ID__ as string,
      Authorization: __TWITCH_OAUTH__ as string,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => console.error(err));
};

export default basicStatsController;
