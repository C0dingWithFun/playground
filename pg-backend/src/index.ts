import dotenv from 'dotenv';

import { __port__ } from './constants';
import app from './app';

const dotenvConfig = dotenv.config();
if (dotenvConfig.error) {
  throw dotenvConfig.error;
}

app.listen(__port__, () => {
  console.info(`🎉 Application has started sucessfully at http://localhost:${__port__}`);
});
