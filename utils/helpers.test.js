
import { describe, it, expect } from 'vitest';

import {
  formatCurrency,
  validateEmail,
  generateSlug,
  calculateDiscount,
  formatDate,
} from './helpers.js';

// TEST 1: Currency formatting
describe('formatCurrency', () => {
  it('formats numbers with KES prefix and commas', () => {
    expect(formatCurrency(1500)).toBe('KES 1,500');
    expect(formatCurrency(1000000)).toBe('KES 1,000,000');
    expect(formatCurrency(0)).toBe('KES 0');
  });
});

// TEST 2: Email validation
describe('validateEmail', () => {
  it('validates correct, empty, and invalid emails', () => {
    expect(validateEmail('user@gmail.com')).toEqual({
      valid: true,
    });

    expect(validateEmail('')).toEqual({
      valid: false,
      error: 'Email is required',
    });

    expect(validateEmail('not-an-email')).toEqual({
      valid: false,
      error: 'Invalid email format',
    });
  });
});

// TEST 3: Slug generation
describe('generateSlug', () => {
  it('converts text to URL-friendly slugs', () => {
    expect(generateSlug('Hello World')).toBe(
      'hello-world'
    );

    expect(generateSlug("Nairobi's Best Coffee!")).toBe(
      'nairobis-best-coffee'
    );

    expect(generateSlug('My New Product')).toBe(
      'my-new-product'
    );
  });
});

// TEST 4: Discount calculation
describe('calculateDiscount', () => {
  it('calculates discounts and rejects invalid percentages', () => {
    expect(calculateDiscount(1000, 10)).toBe(900);

    expect(calculateDiscount(1000, 0)).toBe(1000);

    expect(() => calculateDiscount(1000, -5))
      .toThrow('Invalid discount percentage');
  });
});

// TEST 5: Date formatting
describe('formatDate', () => {
  it('formats ISO dates into readable dates', () => {
    expect(
      formatDate('2025-06-15T10:30:00Z')
    ).toBe('15 Jun 2025');
  });
});
