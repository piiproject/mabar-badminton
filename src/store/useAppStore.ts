import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

type User = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
};

type AppState = {
  user: User | null;
  isReady: boolean;
  initialize: () => Promise<void>;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
};

const USER_KEY = 'MB_USER_V1';

export const useAppStore = create<AppState>((set) => ({
  user: null,
  isReady: false,
  initialize: async () => {
    try {
      const raw = await SecureStore.getItemAsync(USER_KEY);
      if (raw) {
        const user = JSON.parse(raw) as User;
        set({ user, isReady: true });
      } else {
        set({ isReady: true });
      }
    } catch (e) {
      set({ isReady: true });
    }
  },
  login: async (user: User) => {
    try {
      await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user));
      set({ user });
    } catch (e) {
      set({ user });
    }
  },
  logout: async () => {
    try {
      await SecureStore.deleteItemAsync(USER_KEY);
    } catch (e) {
      // ignore
    }
    set({ user: null });
  },
}));
