import React, { useEffect, useState } from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import './App.scss';
import CatalogList from './components/CatalogList/CatalogList';
import CartContainer from './components/CartContainer/CartContainer';
import { iCatalogItem, iUserCart, iMessaging } from '../../types';
import LoaderIndicator from '../../components/LoadingIndicator/LoadingIndicator';

function App() {
  const [catalogItems, setCatalogItems] = useState<iCatalogItem[]>([]);
  const [userCredit, setUserCredit] = useState<number>(10000);
  const [userCart, setUserCart] = useState<iUserCart>({ items: [], total: 0 });
  const [messaging, setMessaging] = useState<iMessaging>({ status: 'loading', message: '', active: false });

  function resetMessaging(): void {
    setMessaging({
      status: '',
      message: '',
      active: false,
    });
  }

  useEffect(() => {
    try {
      fetch('http://localhost:3000/catalog/list').then((result) => {
        result.json().then((jsonResults) => {
          setCatalogItems(jsonResults);
          resetMessaging();
        });
      });
    } catch (error) {
      setMessaging({
        status: 'error',
        message: 'Failed to fetch items',
        active: true,
      });
    }
  }, []);

  function getCartTotal(items: iCatalogItem[]): number {
    const total = items.reduce(
      (accumulator, item) => accumulator + item.price,
      0,
    );

    return total;
  }

  function canUserCheckout(items: iCatalogItem[]): boolean {
    const total = getCartTotal(items);

    if ((userCredit - total) < 0) return false;

    return true;
  }

  function onAddCartItem(itemId: string): void {
    const catalogItem = catalogItems.find((item: iCatalogItem) => item.id === itemId);

    if (catalogItem) {
      const items = [
        ...[catalogItem],
        ...userCart.items,
      ];

      const cart = {
        items,
        total: getCartTotal(items),
      };

      setUserCart(cart);

      const canCheckout = canUserCheckout(items);

      setMessaging({
        status: canCheckout ? '' : 'error',
        message: canCheckout ? '' : 'Not enough credits',
        active: !canCheckout,
      });
    }
  }

  function onRemoveCartItem(itemId: string): void {
    const items = userCart.items.filter((item: iCatalogItem) => item.id !== itemId);

    setUserCart({
      items,
      total: getCartTotal(items),
    });

    const canCheckout = canUserCheckout(items);

    if (!items.length) {
      setMessaging({
        status: '',
        message: '',
        active: false,
      });
    } else {
      setMessaging({
        status: canCheckout ? '' : 'error',
        message: canCheckout ? '' : 'Not enough credits',
        active: !canCheckout,
      });
    }
  }

  function onCheckout(): void {
    const cartTotal = getCartTotal(userCart.items);

    setUserCredit(userCredit - cartTotal);
    setUserCart({
      items: [],
      total: 0,
    });

    setMessaging({
      status: 'success',
      message: 'Purchase completed successfully!',
      active: true,
    });

    setTimeout(resetMessaging, 1000);
  }

  return (
    <div className="app">
      <PageHeader userCredit={userCredit} />
      {messaging.status === 'loading' && (
        <span className="app__loader">
          <LoaderIndicator />
        </span>
      )}
      {(!!catalogItems.length && messaging.status !== 'loading'
      && (
        <section className="app__catalog-cart-container">
          <CatalogList catalogItems={catalogItems} handleAddToCart={onAddCartItem} />
          <CartContainer
            userCart={userCart}
            handleRemoveFromCart={onRemoveCartItem}
            handleCheckout={onCheckout}
            messaging={messaging}
          />
        </section>
      )
      )}
    </div>
  );
}

export default App;
