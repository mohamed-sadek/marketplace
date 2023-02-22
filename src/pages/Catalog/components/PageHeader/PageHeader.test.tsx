import React from 'react';
import { render, screen } from '@testing-library/react';
import PageHeader from './PageHeader';

test('renders app', () => {
  render(<PageHeader userCredit={500} />);
  const headerElement = screen.getByText(/500/i);
  expect(headerElement).toBeInTheDocument();
});
