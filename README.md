# Week 8 – Day 3: Automated Testing

## Project Overview

This project demonstrates the implementation of automated testing in JavaScript, Express.js and React applications.

It covers unit tests for utility functions, API integration tests using Supertest, and React component tests using React Testing Library.

## Objectives

- Understand the importance of automated testing in software development.
- Write unit tests using Vitest.
- Test Express REST API endpoints using Supertest.
- Test React component rendering and user interactions.
- Validate errors, HTTP response codes and asynchronous behaviour.
- Generate a code coverage report and aim for at least 80% coverage.

## Technologies Used

- JavaScript (ES6)
- Node.js
- Express.js
- React
- Vitest
- Supertest
- React Testing Library
- jsdom
- V8 Coverage

## Testing Tasks

### Task 1: Utility Function Tests

Implemented and tested five functions:

1. `formatCurrency()` – Formats amounts in Kenyan shillings.
2. `validateEmail()` – Validates email addresses.
3. `generateSlug()` – Generates URL-friendly text.
4. `calculateDiscount()` – Calculates discounted prices.
5. `formatDate()` – Formats dates into readable strings.

**Required tests:** 5

### Task 2: API Testing

Built an Express API that supports:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Retrieve products |
| POST | `/api/products` | Create a product |
| GET | `/api/products/:id` | Retrieve a product |
| DELETE | `/api/products/:id` | Delete a product |

Supertest verifies HTTP status codes, response bodies, product validation and deletion.

**Required tests:** 5

### Task 3: React Component Testing

Created a Greeting component that displays a personalized welcome message.

The component tests verify:

1. Correct initial rendering.
2. Button interaction.
3. Successful form submission.
4. Loading feedback.
5. Error handling for an empty name.

**Required tests:** 5

## Installation

Clone the repository:

```bash
git clone https://github.com/Dominic-kores/week-8-day-3-assignment
cd week-8-day-3-assignment
```

Install dependencies:

```bash
npm install
```

## Running Tests

Run tests in watch mode:

```bash
npm test
```

Run all tests once:

```bash
npm run test:run
```

Run tests with coverage:

```bash
npm run test:coverage
```

Start the API server:

```bash
npm start
```

The API runs at `http://localhost:3000` by default.

## Test Results

The assignment requires 15 automated tests across three areas. Additional edge-case tests are included to strengthen coverage.

## Key Learning Outcomes

This assignment improved my understanding of writing automated tests, validating API behaviour and testing React components from a user's perspective.

It also demonstrated how testing helps developers identify defects, improve code reliability and maintain confidence when making changes to applications.



## Author

**Dominic Kores**

Full-Stack Software & AI Engineer


