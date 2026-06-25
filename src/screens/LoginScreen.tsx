import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import ScreenHeader from '../components/ScreenHeader';
import { useAppTheme } from '../theme/baseStyles';
import { useAppStore } from '../store/useAppStore';

const LoginScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();
  const { login } = useAppStore();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login({ fullName: 'Pemain Mabar', phone: '081234567890', email: identifier || 'user@example.com', city: 'Jakarta' });
    navigation.getParent()?.navigate('Main');
  };

  return (
    <View style={[{ flex: 1, backgroundColor: paperTheme.colors.background }]}> 
      <ScreenHeader title="Masuk" subtitle="Gunakan email atau WhatsApp untuk melanjutkan" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.description, { color: paperTheme.colors.onSurfaceVariant }]}>Masuk untuk bergabung dengan event, membuat event, dan mengelola aktivitas Mabar.</Text>
        <AppInput label="Email / WhatsApp" value={identifier} onChangeText={setIdentifier} style={styles.input} autoCapitalize="none" />
        <AppInput label="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.link, { color: paperTheme.colors.primary }]}>Lupa Password?</Text>
        </TouchableOpacity>
        <AppButton style={styles.button} onPress={handleLogin}>Login</AppButton>
        <View style={styles.footerText}> 
          <Text style={[styles.text, { color: paperTheme.colors.onSurfaceVariant }]}>Belum punya akun? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.link, { color: paperTheme.colors.primary }]}>Daftar sekarang</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 24,
  },
  description: {
    fontSize: 14,
    marginBottom: 24,
    lineHeight: 22,
  },
  input: {
    marginBottom: 18,
  },
  link: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 24,
  },
  button: {
    marginTop: 8,
  },
  footerText: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});

export default LoginScreen;
