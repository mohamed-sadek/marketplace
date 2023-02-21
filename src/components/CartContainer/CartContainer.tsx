import React from 'react';
import CartItem from '../CartItem/CartItem';
import CheckoutWidget from '../CheckoutWidget/CheckoutWidget';
import './CartContainer.scss';
import { iMessaging, iUserCart } from '../../types';

interface Props {
  userCart: iUserCart,
  handleRemoveFromCart: (id: string) => void,
  handleCheckout: () => void,
  messaging: iMessaging,

}

export default function CartContainer({
  userCart,
  handleRemoveFromCart,
  handleCheckout,
  messaging,
}: Props) {
  function isCheckoutDisabled(): boolean {
    return !!(!userCart.items.length || (messaging.active && messaging.status === 'error'));
  }

  return (
    <section className="cart-container">
      <section className="cart-container__cart-list">
        {userCart.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemoveItem={handleRemoveFromCart}
          />
        ))}
      </section>

      {
        messaging.active
      && (
        <p className={`cart-container__message cart-container__message--${messaging.status}`}>
          {messaging.message}
        </p>
      )

      }
      <CheckoutWidget
        userCredit={userCart.total}
        disabled={isCheckoutDisabled()}
        handleCheckout={handleCheckout}
      />
    </section>
  );
}
