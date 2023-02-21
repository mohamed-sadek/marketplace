import React from 'react';
import './CartItem.scss';
import { iCatalogItem } from '../../types';

interface Props {
  item: iCatalogItem,
  onRemoveItem: (id: string) => void,
}

export default function CartItem({ item, onRemoveItem }: Props) {
  return (
    <article className="cart-item">

      <p className="cart-item__title">{item.title}</p>
      <button type="button" className="cart-item__remove-btn" onClick={() => onRemoveItem(item.id)}>X</button>
      <p className="cart-item__price">
        {item.price}
        <span className="cart-item__total-title">Credits</span>
      </p>

    </article>
  );
}
