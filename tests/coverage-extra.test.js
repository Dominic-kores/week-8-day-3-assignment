
import request from 'supertest';
import {
  describe,
  it,
  expect,
  beforeEach,
} from 'vitest';

import app, { resetProducts } from '../app.js';

import {
  validateEmail,
  generateSlug,
  calculateDiscount,
} from '../utils/helpers.js';

beforeEach(() => {
  resetProducts();
});

describe('Additional coverage tests', () => {

  it('rejects invalid product prices', async () => {
    const invalidProducts = [
      { name: 'Rice' },
      { name: 'Rice', price: '100' },
      { name: 'Rice', price: -5 },
      { name: '', price: 100 },
      { name: 123, price: 100 },
      { name: 'Rice', price: null },
      {},
    ];

    for (const product of invalidProducts) {
      const response = await request(app)
        .post('/api/products')
        .send(product);

      expect(response.status).toBe(400);
    }
  });

  it('returns 404 for unknown products', async () => {
    const getResponse = await request(app)
      .get('/api/products/999');

    const deleteResponse = await request(app)
      .delete('/api/products/999');

    expect(getResponse.status).toBe(404);
    expect(deleteResponse.status).toBe(404);
  });

  it('covers additional utility edge cases', () => {
    expect(validateEmail('   ').valid).toBe(false);
    expect(validateEmail(null).valid).toBe(false);

    expect(
      generateSlug('  Hello   World  ')
    ).toBe('hello-world');

    expect(
      generateSlug('hello---world')
    ).toBe('hello-world');

    expect(() => {
      calculateDiscount(1000, 110);
    }).toThrow('Invalid discount percentage');
  });

});
