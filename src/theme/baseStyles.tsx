import React, { createContext, useContext, useMemo, useState } from 'react';
import { Appearance } from 'react-native';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { color, radius, shadow } from './themeConstants';

export { color, typography, spacing, radius, shadow } from './themeConstants';

const lightTheme = {
  ...MD3LightTheme,
  dark: false,
  roundness: 16,
  colors: {
    ...MD3LightTheme.colors,
    primary: color.primaryGreen,
    secondary: color.primaryBlue,
    background: color.backgroundLight,
    surface: color.cardLight,
    surfaceVariant: '#E2E8F0',
    onSurface: color.textLight,
    onSurfaceVariant: '#64748B',
    primaryContainer: '#DCFCE7',
    error: color.danger,
    outline: color.borderLight,
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  dark: true,
  roundness: 16,
  colors: {
    ...MD3DarkTheme.colors,
    primary: color.primaryGreen,
    secondary: color.primaryBlue,
    background: color.backgroundDark,
    surface: color.cardDark,
    surfaceVariant: '#334155',
    onSurface: color.textDark,
    onSurfaceVariant: '#94A3B8',
    primaryContainer: '#14532D',
    error: color.danger,
    outline: color.borderDark,
  },
};

type ThemeMode = 'light' | 'dark' | 'system';

type ThemeContextValue = {
  mode: ThemeMode;
  setMode: (value: ThemeMode) => void;
  paperTheme: typeof lightTheme;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextValue>({
  mode: 'system',
  setMode: () => null,
  paperTheme: lightTheme,
  isDark: false,
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('system');
  const colorScheme = Appearance.getColorScheme();
  const isDark = mode === 'system' ? colorScheme === 'dark' : mode === 'dark';
  const paperTheme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, paperTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);

export { globalStyles } from './globalStyles';
