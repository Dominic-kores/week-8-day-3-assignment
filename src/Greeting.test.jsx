
/**
 * @vitest-environment jsdom
 */

import React from 'react';

import {
  describe,
  it,
  expect,
} from 'vitest';

import {
  render,
  screen,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import Greeting from './Greeting.jsx';

describe('Greeting Component', () => {

  // TEST 1: Component renders correctly
  it('renders the Welcome heading and Submit button', () => {
    render(<Greeting />);

    expect(
      screen.getByRole('heading', { name: 'Welcome' })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'Submit' })
    ).toBeInTheDocument();
  });

  // TEST 2: Button click changes the displayed text
  it('changes the message after clicking Submit', async () => {
    const user = userEvent.setup();

    render(<Greeting />);

    const input = screen.getByLabelText('Your name');

    await user.type(input, 'Dominic');

    await user.click(
      screen.getByRole('button', { name: 'Submit' })
    );

    expect(
      await screen.findByText(
        'Hello, Dominic! Welcome to Mctaba Academy.'
      )
    ).toBeInTheDocument();
  });

  // TEST 3: Form submission updates the message
  it('submits a name and displays a greeting', async () => {
    const user = userEvent.setup();

    render(<Greeting />);

    await user.type(
      screen.getByPlaceholderText('Enter your name'),
      'John'
    );

    await user.click(
      screen.getByRole('button', { name: 'Submit' })
    );

    expect(
      await screen.findByText(
        'Hello, John! Welcome to Mctaba Academy.'
      )
    ).toBeInTheDocument();
  });

  // TEST 4: Loading feedback is visible
  it('shows Loading when submitting a valid name', async () => {
    const user = userEvent.setup();

    render(<Greeting />);

    await user.type(
      screen.getByLabelText('Your name'),
      'Mary'
    );

    await user.click(
      screen.getByRole('button', { name: 'Submit' })
    );

    expect(
      screen.getByText('Loading...')
    ).toBeInTheDocument();

    // Wait for the asynchronous process to finish
    expect(
      await screen.findByText(
        'Hello, Mary! Welcome to Mctaba Academy.'
      )
    ).toBeInTheDocument();
  });

  // TEST 5: Empty name triggers validation error
  it('shows an error when name is missing', async () => {
    const user = userEvent.setup();

    render(<Greeting />);

    await user.click(
      screen.getByRole('button', { name: 'Submit' })
    );

    expect(
      screen.getByRole('alert')
    ).toHaveTextContent('Name is required');
  });

});
