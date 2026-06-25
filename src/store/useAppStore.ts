import { create } from 'zustand';

type User = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
};

type AppState = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const useAppStore = create<AppState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
