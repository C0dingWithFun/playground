import { CorsOptions } from 'cors';

import { __prod__ } from '../constants';

const corsOptions: CorsOptions = {
  origin: __prod__
    ? ['http://localhost:4040']
    : ['http://localhost:4000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

export default corsOptions;
