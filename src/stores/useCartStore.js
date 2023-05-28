import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [
    {
      name: '비스포크 멀티형 무풍클래식 에어컨 2등급 AF17B7538TZRS 전국설치1',
      price: 1899000,
      image:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168117893709604626.jpg?gif=1&w=960&h=960&c=c',
    },
    {
      name: '비스포크 멀티형 무풍클래식 에어컨 2등급 AF17B7538TZRS 전국설치1',
      price: 1899000,
      image:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168117893709604626.jpg?gif=1&w=960&h=960&c=c',
    },
  ],
  setCart: (newItem) =>
    set((prev) => ({
      cart: [...prev.cart, newItem],
    })),
}));

export default useCartStore;
