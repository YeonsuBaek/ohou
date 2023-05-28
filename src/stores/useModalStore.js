import create from 'zustand';

const useModalStore = create((set) => ({
  modal: false,
  setModal: (open) => set({ modal: open }),
}));

export default useModalStore;
