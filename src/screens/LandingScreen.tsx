import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import ScreenLayout from '../components/ScreenLayout';
import { useAppTheme } from '../theme/baseStyles';

const LandingScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <ScreenLayout contentContainerStyle={styles.content}>
      <View style={styles.hero}>  
        <View style={[styles.logo, { backgroundColor: paperTheme.colors.surface }]}>
          <Text style={[styles.logoText, { color: paperTheme.colors.primary }]}>MB</Text>
        </View>
        <Text style={[styles.title, { color: paperTheme.colors.onSurface }]}>Mabar Badminton Manager</Text>
        <Text style={[styles.subtitle, { color: paperTheme.colors.onSurfaceVariant }]}>Solusi manajemen event mabar untuk admin dan pemain.</Text>
      </View>

      <View style={styles.actions}>
        <AppButton labelStyle={styles.buttonLabel} onPress={() => navigation.navigate('AdminLogin')} style={styles.button}>
          Masuk Sebagai Admin
        </AppButton>
        <AppButton variant="secondary" labelStyle={styles.buttonLabel} onPress={() => navigation.navigate('PlayerJoin')} style={styles.button}>
          Join Mabar
        </AppButton>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 24, justifyContent: 'center', flexGrow: 1 },
  hero: { alignItems: 'center', marginBottom: 40 },
  logo: { width: 112, height: 112, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.12, shadowRadius: 24, elevation: 8 },
  logoText: { fontSize: 42, fontWeight: '800' },
  title: { fontSize: 28, fontWeight: '800', textAlign: 'center', marginBottom: 12 },
  subtitle: { fontSize: 16, textAlign: 'center', lineHeight: 24 },
  actions: { width: '100%' },
  button: { marginBottom: 16 },
  buttonLabel: { fontSize: 16 },
});

export default LandingScreen;
