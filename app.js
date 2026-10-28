
import express from 'express';
import cors from 'cors';

// Initialize Express application
const app = express();

// Enable CORS and parse JSON request bodies
app.use(cors());
app.use(express.json());

// Initial sample products
const initialProducts = [
  { id: 1, name: 'Maize Flour', price: 200 },
  { id: 2, name: 'Fresh Milk', price: 80 },
  { id: 3, name: 'Kenyan Tea', price: 350 },
];

// Store products in memory
let products = initialProducts.map(product => ({ ...product }));

let nextId = 4;

// Reset data between tests to keep tests independent
export function resetProducts() {
  products = initialProducts.map(product => ({ ...product }));
  nextId = 4;
}

// GET: Retrieve all products
app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

// POST: Create a new product
app.post('/api/products', (req, res) => {
  const { name, price } = req.body || {};

  // Validate product name and price
  if (
    typeof name !== 'string' ||
    !name.trim() ||
    typeof price !== 'number' ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    return res.status(400).json({
      error: 'Valid product name and price are required',
    });
  }

  // Create a product with a unique ID
  const newProduct = {
    id: nextId++,
    name: name.trim(),
    price,
  };

  products.push(newProduct);

  return res.status(201).json(newProduct);
});

// GET: Retrieve a product by ID
app.get('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);

  const product = products.find(item => item.id === id);

  if (!product) {
    return res.status(404).json({
      error: 'Product not found',
    });
  }

  return res.status(200).json(product);
});

// DELETE: Remove a product by ID
app.delete('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);

  const productIndex = products.findIndex(
    item => item.id === id
  );

  if (productIndex === -1) {
    return res.status(404).json({
      error: 'Product not found',
    });
  }

  // Remove the product
  products.splice(productIndex, 1);

  return res.status(204).send();
});

// Export app without starting the server
export default app;
