// eslint-disable-next-line
import supertest from 'supertest';

import app from './app';

describe('GET /', () => {
  it('should respond with message', async () => {
    const response = await supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);

    // Testing body response
    expect(response.body.message)
      .toEqual('Welcome to the API for the playground toolkit 🧰!');
  });
});

describe('GET /faefsaefsef', () => {
  it('should respond with not found messge', async () => {
    const response = await supertest(app)
      .get('/faefsaefsef')
      .expect('Content-Type', /json/)
      .expect(404);

    // Testing body response
    expect(response.body.message)
      .toEqual('The requested route does not exists.');
  });
});
