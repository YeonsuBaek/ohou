import { create } from 'zustand';

const useModalStore = create((set) => ({
  modal: false,
  setModal: (open) => set({ modal: open }),
  myMenu: false,
  setMyMenu: (open) => set({ myMenu: open }),
}));

export default useModalStore;
