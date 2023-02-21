import React from 'react';
import './CheckoutWidget.scss';

interface Props {
  userCredit: number,
  disabled: boolean,
  handleCheckout: () => void,

}

export default function CheckoutWidget({ userCredit, disabled, handleCheckout }: Props) {
  return (
    <section className="checkout-widget">
      <p className="checkout-widget__total-label">Total:</p>
      <p className="checkout-widget__total-value">
        {userCredit}

        <span className="checkout-widget__total-title">Credits</span>
      </p>
      <button
        disabled={disabled}
        type="button"
        className="checkout-widget__buy-now-btn"
        onClick={handleCheckout}
      >
        Buy now
      </button>
    </section>
  );
}
