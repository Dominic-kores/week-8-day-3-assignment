
import React, { useState } from 'react';

export default function Greeting() {
  // Store the input entered by the user
  const [name, setName] = useState('');

  // Track successful form submission
  const [submitted, setSubmitted] = useState(false);

  // Show loading state while processing
  const [loading, setLoading] = useState(false);

  // Store form validation errors
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Do not allow an empty name
    if (!name.trim()) {
      setError('Name is required');
      return;
    }

    // Start loading
    setLoading(true);
    setError(null);

    // Simulate an asynchronous process
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 100);
  };

  return (
    <div>
      <h1>Welcome</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Your name
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <button type="submit">
            Submit
          </button>

          {/* Display loading feedback */}
          {loading && (
            <p role="status">Loading...</p>
          )}

          {/* Display error feedback */}
          {error && (
            <p role="alert">{error}</p>
          )}
        </form>
      ) : (
        <p>
          Hello, {name}! Welcome to Mctaba Academy.
        </p>
      )}
    </div>
  );
}
