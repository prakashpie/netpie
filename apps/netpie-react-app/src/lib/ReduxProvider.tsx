'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { setCart } from './cartSlice';
import { useEffect } from 'react';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      store.dispatch(setCart(JSON.parse(cart)));
    }

    const unsubscribe = store.subscribe(() => {
      localStorage.setItem('cart', JSON.stringify(store.getState().cart.items));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
