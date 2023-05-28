import { create } from 'zustand';

const useCartStore = create((set) => ({
  carts: {},
  setCarts: (newCart) =>
    set((prev) => ({
      carts: { ...prev.carts, [newCart]: [] },
    })),
  addToCart: (user, product) =>
    set((prev) => ({
      carts: {
        ...prev.carts,
        [user]: prev.carts[user] ? [...prev.carts[user], product] : [product],
      },
    })),
}));

export default useCartStore;
