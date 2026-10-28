
/**
 * Formats an amount as Kenyan Shillings (KES).
 * Example: formatCurrency(1500) -> "KES 1,500"
 */
export function formatCurrency(amount) {
  return `KES ${amount.toLocaleString('en-US')}`;
}

/**
 * Validates an email address.
 * Returns { valid: true } for a correct email.
 * Returns an error for invalid email addresses.
 */
export function validateEmail(email) {
  if (typeof email !== 'string' || !email.trim()) {
    return {
      valid: false,
      error: 'Email is required',
    };
  }

  const trimmed = email.trim();

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmed)) {
    return {
      valid: false,
      error: 'Invalid email format',
    };
  }

  return { valid: true };
}

/**
 * Converts text into a URL-friendly slug.
 * Example: "Hello World" -> "hello-world"
 */
export function generateSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Calculates the discounted price.
 * Example: calculateDiscount(1000, 10) -> 900
 */
export function calculateDiscount(price, percentage) {
  if (percentage < 0 || percentage > 100) {
    throw new Error('Invalid discount percentage');
  }

  return price - (price * percentage) / 100;
}

/**
 * Formats a date into DD Mon YYYY.
 * Example: "2025-06-15T10:30:00Z" -> "15 Jun 2025"
 */
export function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
