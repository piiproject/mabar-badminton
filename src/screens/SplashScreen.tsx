import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../theme/baseStyles';

const SplashScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Main');
    }, 1200);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={[styles.container, { backgroundColor: paperTheme.colors.background }]}> 
      <View style={[styles.card, { backgroundColor: paperTheme.colors.surface }]}> 
        <Text style={[styles.logo, { color: paperTheme.colors.primary }]}>MB</Text>
        <Text style={[styles.title, { color: paperTheme.colors.onSurface }]}>Mabar Badminton Manager</Text>
        <Text style={[styles.subtitle, { color: paperTheme.colors.onSurfaceVariant }]}>Temukan dan Kelola Mabar Badminton di Seluruh Indonesia</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
  logo: {
    fontSize: 48,
    fontWeight: '800',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default SplashScreen;
