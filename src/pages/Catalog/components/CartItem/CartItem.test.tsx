import React from 'react';
import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';

test('renders app', () => {
  const item = {
    title: 'ITEM_TITLE',
    price: 50,
    id: "1",
    purchasable: true,
  };
  render(<CartItem item={item} onRemoveItem={() => {}} />);
  const cartItemElement = screen.getByText(/ITEM_TITLE/i);
  expect(cartItemElement).toBeInTheDocument();
});
