import { NextFunction, Request, Response } from 'express';
import { google } from 'googleapis';

import { __YOUTUBE_API_KEY__, __YOUTUBE_CHANNEL_ID__ } from '../../constants';

// function handleCache(data) {

// }

/**
 * Controller for /api/v1/youtube/subscribers endpoint and returns current channel subscribers
 * @param {Express.Request} req Express Request object
 * @param {Express.Response} res Express Response object
 * @param {NextFunction} next Express Next Function
 */
const ytSubscribersController = (req: Request, res: Response, next: NextFunction) => {
  const ytService = google.youtube('v3');
  // Calling Google API
  ytService.channels.list({
    auth: __YOUTUBE_API_KEY__,
    part: ['snippet', 'statistics'],
    id: [__YOUTUBE_CHANNEL_ID__!],
  }, (err, response) => {
    // Handling the error case from response
    if (err) {
      res.status(500);
      next(new Error(err.message));
      return;
    }
    // Fetching subscribers from response
    const subscribers = response?.data.items![0]?.statistics?.subscriberCount;
    const channelDetails = response?.data.items![0]?.snippet?.localized;

    res.status(200);
    res.json({
      message: 'Successfully fetched subscribers count',
      data: {
        subscribers,
        channelDetails,
      },
      requestedURL: req.originalUrl,
    });
  });
};

export default ytSubscribersController;
