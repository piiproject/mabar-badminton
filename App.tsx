import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeProvider, useAppTheme } from './src/theme/baseStyles';
import { RootNavigator } from './src/navigation';

const AppContent = () => {
  const { paperTheme } = useAppTheme();

  useEffect(() => {
    MaterialCommunityIcons.loadFont();
  }, []);

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
