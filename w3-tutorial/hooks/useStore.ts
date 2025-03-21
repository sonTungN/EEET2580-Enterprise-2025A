import { TicketItem } from "@/types/Ticket";
import { create } from "zustand";

type State = {
  items: TicketItem[];
  total: number;
};

type Actions = {
  addToCart: (item: TicketItem) => void;
  clearCart: () => void;
  calculateTotal: () => void;
};

export const useStore = create<State & Actions>((set, get) => ({
  items: [],
  total: 0,

  addToCart: (item: TicketItem) => {
    set((state) => {
      const newItems = [...state.items, item];
      const newTotal = newItems.reduce((sum, item) => sum + item.price, 0);
      return { items: newItems, total: newTotal };
    });
  },

  clearCart: () => {
    set({ items: [], total: 0 });
  },

  calculateTotal: () => {
    set((state) => ({
      total: state.items.reduce((sum, item) => sum + item.price, 0),
    }));
  },
}));
