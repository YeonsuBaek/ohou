import { create } from 'zustand';

const useProductStore = create((set) => ({
  name: '',
  price: '',
  image: '',
  setName: (text) => set({ name: text }),
  setPrice: (number) => set({ price: number }),
  setImage: (file) => set({ image: file }),
  products: [],
  setProducts: (newProduct) =>
    set((prev) => ({
      products: [...prev.products, newProduct],
    })),
}));

export default useProductStore;
