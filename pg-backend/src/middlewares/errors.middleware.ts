import { ErrorRequestHandler, RequestHandler } from 'express';
import { __prod__ } from '../constants';

export const notFoundHandler: RequestHandler = (req, res, next) => {
  res.status(404);
  next(new Error(`The requested route '${req.originalUrl} does not exists.`));
};

export const errorHandler: ErrorRequestHandler = (err, req, res) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  return res.json({
    errorCode: statusCode,
    message: err.message,
    requestURL: req.originalUrl,
    stack: __prod__ ? '' : err.stack,
  });
};
