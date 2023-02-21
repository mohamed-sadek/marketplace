import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  render, screen, waitFor, act,
} from '@testing-library/react';
import App from './App';

// Mock server data
const server = setupServer(
  rest.get('*/catalog/list', (req, res, ctx) => res(ctx.json([{ title: 'TITLE', price: 50, id: '20' }]))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders app with catalog list', async () => {
  render(<App />);
  const elementList = await waitFor(() => screen.getByTestId('catalog-list'));
  expect(elementList).toBeInTheDocument();
});

test('adds an item to cart', async () => {
  render(<App />);
  const addToCartBtn = await waitFor(() => screen.getByText('Add to cart'));
  const buyNowBtn = await waitFor(() => screen.getByText('Buy now'));

  expect(buyNowBtn).toBeDisabled();

  act(() => {
    addToCartBtn.click();
  });

  expect(buyNowBtn).not.toBeDisabled();
});
