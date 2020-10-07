export const __PROD__ = process.env.NODE_ENV === 'production';
export const __PORT__ = process.env.PORT ? Number(process.env.PORT) : 9000;

export const __YOUTUBE_API_KEY__ = process.env.YOUTUBE_API_KEY?.toString();
export const __YOUTUBE_CHANNEL_ID__ = process.env.YOUTUBE_CHANNEL_ID?.toString();

export enum ERedisKeys {
  YTSubscribers = 'yt-subscribers',
}
