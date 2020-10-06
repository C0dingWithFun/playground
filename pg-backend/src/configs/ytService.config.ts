import { __YOUTUBE_API_KEY__, __YOUTUBE_CHANNEL_ID__ } from '../constants';

export enum YTServicePartsOptionEnum {
  SNIPPET = 'snippet',
  STATISTICS = 'statistics',
}

export const ytServiceBaseConfig = {
  auth: __YOUTUBE_API_KEY__,
  id: [__YOUTUBE_CHANNEL_ID__!],
};

export default {
  ytServiceBaseConfig,
  YTServicePartsOptionEnum,
};
