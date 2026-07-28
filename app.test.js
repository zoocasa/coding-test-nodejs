const request = require('supertest');
const app = require('./app');

describe('Hello endpoint', () => {
  test('GET /hello returns hello world', async () => {
    const res = await request(app).get('/hello');
    expect(res.status).toBe(200);
    expect(res.text).toBe('hello world');
  });
});

describe('Listings endpoint', () => {
  test('GET /listings returns an empty array initially', async () => {
    const res = await request(app).get('/listings');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  // TODO
  // test('returns an array of listings with id, street_address, price, status', async () => {
  // });

  // TODO
  // filters
});
