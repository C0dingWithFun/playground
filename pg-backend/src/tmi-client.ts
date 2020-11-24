import tmi from 'tmi.js';
import { __TWITCH_OAUTH__ } from './constants';

export const twitchClient: tmi.Client = tmi.Client({
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: 'CodingWithFun',
    password: __TWITCH_OAUTH__,
  },
  channels: ['codingwithfun'],
});

export default { twitchClient };
