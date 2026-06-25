import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeProvider, useAppTheme } from './src/theme/baseStyles';
import { RootNavigator } from './src/navigation';
import { useAppStore } from './src/store/useAppStore';

const AppContent = () => {
  const { paperTheme } = useAppTheme();
  const [iconFontLoaded, setIconFontLoaded] = useState(false);
  const { isReady, initialize } = useAppStore();

  useEffect(() => {
    MaterialCommunityIcons.loadFont()
      .then(() => setIconFontLoaded(true))
      .catch(() => setIconFontLoaded(true));
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (!iconFontLoaded || !isReady) {
    return null;
  }

  return (
    <PaperProvider theme={paperTheme as any}>
      <NavigationContainer theme={paperTheme as any}>
        <StatusBar style={paperTheme.dark ? 'light' : 'dark'} />
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
