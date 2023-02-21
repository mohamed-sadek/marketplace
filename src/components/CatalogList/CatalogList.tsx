import React from 'react';
import CatalogItem from '../CatalogItem/CatalogItem';
import './CatalogList.scss';
import { iCatalogItem } from '../../types';

interface Props {
  catalogItems: iCatalogItem[],
  handleAddToCart: (id: string) => void,
}

export default function CatalogList({ catalogItems, handleAddToCart }: Props) {
  return (
    <section className="catalog-list" data-testid="catalog-list">
      {catalogItems.map(
        (item: iCatalogItem) => (
          <CatalogItem
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
          />
        ),
      )}
    </section>
  );
}
