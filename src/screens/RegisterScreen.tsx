import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import ScreenHeader from '../components/ScreenHeader';
import { useAppTheme } from '../theme/baseStyles';
import { useAppStore } from '../store/useAppStore';

const RegisterScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();
  const { login } = useAppStore();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleRegister = () => {
    if (!acceptedTerms) {
      return;
    }

    login({ fullName: fullName || 'Pemain Mabar', phone: phone || '081234567890', email: email || 'user@example.com', city: 'Jakarta' });
    navigation.getParent()?.navigate('Main');
  };

  return (
    <View style={[{ flex: 1, backgroundColor: paperTheme.colors.background }]}> 
      <ScreenHeader title="Daftar Akun" subtitle="Buat akun untuk mulai join dan membuat event" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.content}>
        <AppInput label="Nama Lengkap" value={fullName} onChangeText={setFullName} style={styles.input} />
        <AppInput label="Nomor WhatsApp" value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} />
        <AppInput label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" style={styles.input} />
        <AppInput label="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
        <AppInput label="Konfirmasi Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={styles.input} />

        <View style={styles.termsRow}>
          <Checkbox status={acceptedTerms ? 'checked' : 'unchecked'} onPress={() => setAcceptedTerms(!acceptedTerms)} />
          <Text style={[styles.termsText, { color: paperTheme.colors.onSurfaceVariant }]}>Saya menyetujui syarat dan ketentuan.</Text>
        </View>

        <AppButton style={styles.button} onPress={handleRegister}>Daftar</AppButton>
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
  input: {
    marginBottom: 18,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  termsText: {
    fontSize: 14,
    flex: 1,
  },
  button: {
    marginTop: 6,
  },
  footerText: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    fontWeight: '600',
  },
  text: {
    fontSize: 14,
  },
});

export default RegisterScreen;
