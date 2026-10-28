
import request from 'supertest';

import {
  describe,
  it,
  expect,
  beforeEach,
} from 'vitest';

import app, { resetProducts } from '../app.js';

// Reset in-memory data before every test
beforeEach(() => {
  resetProducts();
});

describe('Products API Tests', () => {

  // TEST 1: GET all products
  it('GET /api/products returns all products', async () => {
    const response = await request(app)
      .get('/api/products');

    expect(response.status).toBe(200);

    expect(Array.isArray(response.body)).toBe(true);

    expect(response.body).toHaveLength(3);
  });

  // TEST 2: Create a valid product
  it('POST /api/products creates a new product', async () => {
    const newProduct = {
      name: 'Sugar',
      price: 180,
    };

    const response = await request(app)
      .post('/api/products')
      .send(newProduct);

    expect(response.status).toBe(201);

    expect(response.body).toMatchObject(newProduct);

    expect(response.body).toHaveProperty('id');
  });

  // TEST 3: Retrieve a product by its ID
  it('GET /api/products/:id returns the correct product', async () => {
    const response = await request(app)
      .get('/api/products/1');

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      id: 1,
      name: 'Maize Flour',
      price: 200,
    });
  });

  // TEST 4: Reject invalid product information
  it('POST /api/products returns 400 when name is missing', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({ price: 100 });

    expect(response.status).toBe(400);

    expect(response.body).toHaveProperty('error');

    expect(response.body.error).toBe(
      'Valid product name and price are required'
    );
  });

  // TEST 5: Delete an existing product
  it('DELETE /api/products/:id deletes the product', async () => {
    const response = await request(app)
      .delete('/api/products/1');

    expect(response.status).toBe(204);

    // Confirm the deleted product is no longer found
    const checkResponse = await request(app)
      .get('/api/products/1');

    expect(checkResponse.status).toBe(404);
  });

});
