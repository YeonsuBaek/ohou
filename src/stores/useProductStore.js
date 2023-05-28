import { create } from 'zustand';

const useProductStore = create((set) => ({
  name: '',
  price: '',
  image: '',
  setName: (text) => set({ name: text }),
  setPrice: (number) => set({ price: number }),
  setImage: (file) => set({ image: file }),
  products: [
    {
      name: '비스포크 멀티형 무풍클래식 에어컨 2등급 AF17B7538TZRS 전국설치1',
      price: 1899000,
      image:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168117893709604626.jpg?gif=1&w=960&h=960&c=c',
    },
    {
      name: '비스포크 멀티형 무풍클래식 에어컨 2등급 AF17B7538TZRS 전국설치2',
      price: 1899000,
      image:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168117893709604626.jpg?gif=1&w=960&h=960&c=c',
    },
    {
      name: '비스포크 멀티형 무풍클래식 에어컨 2등급 AF17B7538TZRS 전국설치3',
      price: 1899000,
      image:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168117893709604626.jpg?gif=1&w=960&h=960&c=c',
    },
  ],
  setProducts: (newProduct) =>
    set((prev) => ({
      products: [...prev.products, newProduct],
    })),
}));

export default useProductStore;
