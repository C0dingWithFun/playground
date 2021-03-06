import { CorsOptions } from 'cors';

import { __PROD__ } from '../constants';

const corsOptions: CorsOptions = {
  origin: __PROD__
    ? ['http://localhost:4040']
    : ['http://localhost:4000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

export default corsOptions;
