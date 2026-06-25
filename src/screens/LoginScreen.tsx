import React, { useState, useEffect } from 'react';
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
  const [idError, setIdError] = useState<string | null>(null);
  const [passError, setPassError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(async () => {
      await login({ fullName: 'Pemain Mabar', phone: identifier.replace(/[^0-9]/g, ''), email: identifier.includes('@') ? identifier : 'user@example.com', city: 'Jakarta' });
      setLoading(false);
      navigation.getParent()?.navigate('Main');
    }, 800);
  };

  const validate = () => {
    // identifier: email or whatsapp
    if (!identifier) {
      setIdError('Email atau Nomor WhatsApp wajib diisi.');
    } else if (identifier.includes('@')) {
      const re = /\S+@\S+\.\S+/;
      if (!re.test(identifier)) setIdError('Masukkan alamat email yang valid.');
      else setIdError(null);
    } else {
      const digits = identifier.replace(/[^0-9]/g, '');
      if (!/^[0-9]+$/.test(digits) || digits.length < 10 || digits.length > 15) setIdError('Nomor WhatsApp tidak valid.');
      else setIdError(null);
    }

    if (!password) setPassError('Password wajib diisi.');
    else if (password.length < 6) setPassError('Password minimal 6 karakter.');
    else setPassError(null);
  };

  useEffect(() => {
    validate();
    setIsValid(!idError && !passError && identifier.length > 0 && password.length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identifier, password, idError, passError]);

  return (
    <View style={[{ flex: 1, backgroundColor: paperTheme.colors.background }]}> 
      <ScreenHeader title="Masuk" subtitle="Gunakan email atau WhatsApp untuk melanjutkan" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.description, { color: paperTheme.colors.onSurfaceVariant }]}>Masuk untuk bergabung dengan event, membuat event, dan mengelola aktivitas Mabar.</Text>
        <AppInput label="Email / WhatsApp" value={identifier} onChangeText={setIdentifier} style={styles.input} autoCapitalize="none" />
        {idError ? <Text style={[styles.errorText]}>{idError}</Text> : null}
        <AppInput label="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
        {passError ? <Text style={[styles.errorText]}>{passError}</Text> : null}
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.link, { color: paperTheme.colors.primary }]}>Lupa Password?</Text>
        </TouchableOpacity>
        <AppButton style={styles.button} onPress={handleLogin} disabled={!isValid || loading} loading={loading}>Masuk</AppButton>
        <AppButton variant="secondary" style={styles.button} onPress={() => navigation.navigate('Register')} disabled={loading}>Daftar Akun Baru</AppButton>
        <View style={styles.footerText}> 
          <Text style={[styles.text, { color: paperTheme.colors.onSurfaceVariant }]}>Sudah punya akun? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.link, { color: paperTheme.colors.primary }]}>Masuk</Text>
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
  errorText: {
    color: '#DC2626',
    marginBottom: 12,
    fontSize: 13,
  },
});

export default LoginScreen;
