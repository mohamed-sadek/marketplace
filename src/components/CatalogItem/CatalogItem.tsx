import React from 'react';
import { iCatalogItem } from '../../types';
import './CatalogItem.scss';

interface Props {
  item: iCatalogItem,
  handleAddToCart: (id: string) => void,
}

export default function CatalogItem({ item, handleAddToCart }: Props) {
  return (
    <article className="catalog-item">
      <h3 className="catalog-item__title">{item.title}</h3>
      <p className="catalog-item__price">
        {item.price}
        <span className="catalog-item__price-label">Credits</span>
      </p>
      <button type="button" className="catalog-item__add-to-cart-btn" onClick={() => handleAddToCart(item.id)}>Add to cart</button>
    </article>
  );
}
