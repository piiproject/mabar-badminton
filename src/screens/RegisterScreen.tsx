import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import ScreenHeader from '../components/ScreenHeader';
import ScreenLayout from '../components/ScreenLayout';
import { useAppTheme } from '../theme/baseStyles';
import { useAppStore } from '../store/useAppStore';

const RegisterScreen = ({ navigation }: any) => {
  const { paperTheme, t } = useAppTheme();
  const { login } = useAppStore();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleRegister = () => {
    if (!isValid) return;
    setLoading(true);
    setTimeout(async () => {
      await login({ fullName: fullName || 'Pemain Mabar', phone: phone || '081234567890', email: email || 'user@example.com', city: 'Jakarta' });
      setLoading(false);
      navigation.getParent()?.navigate('Main');
    }, 800);
  };

  const validate = () => {
    const e: { [key: string]: string | null } = {};
    if (!fullName || fullName.trim().length < 3) e.fullName = t.validation.requiredFullName;
    if (!phone) e.phone = t.validation.invalidPhone;
    else {
      const digits = phone.replace(/[^0-9]/g, '');
      if (!/^[0-9]+$/.test(digits) || digits.length < 10 || digits.length > 15) e.phone = t.validation.invalidPhone;
    }
    if (!email) e.email = t.validation.invalidEmail;
    else {
      const re = /\S+@\S+\.\S+/;
      if (!re.test(email)) e.email = t.validation.invalidEmail;
    }
    if (!password || password.length < 6) e.password = t.validation.minPassword;
    if (confirmPassword !== password) e.confirmPassword = t.validation.passwordMismatch;
    if (!acceptedTerms) e.terms = t.validation.requiredTerms;
    setErrors(e);
    setIsValid(Object.keys(e).length === 0);
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullName, phone, email, password, confirmPassword, acceptedTerms]);

  return (
    <ScreenLayout contentContainerStyle={styles.content}>
      <ScreenHeader
        title={t.register.title}
        subtitle={t.register.subtitle}
        showBack
        actionIcon="cog"
        onAction={() => navigation.navigate('LanguageSettings')}
        onBack={() => navigation.goBack()}
      />
      <AppInput label={t.register.fullName} value={fullName} onChangeText={setFullName} style={styles.input} />
      {errors.fullName ? <Text style={styles.errorText}>{errors.fullName}</Text> : null}
      <AppInput label={t.register.phone} value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} />
      {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}
      <AppInput label={t.register.email} value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" style={styles.input} />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
      <AppInput label={t.register.password} value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
      <AppInput label={t.register.confirmPassword} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={styles.input} />
      {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

      <View style={styles.termsRow}>
        <Checkbox status={acceptedTerms ? 'checked' : 'unchecked'} onPress={() => setAcceptedTerms(!acceptedTerms)} />
        <Text style={[styles.termsText, { color: paperTheme.colors.onSurfaceVariant }]}>{t.register.terms}</Text>
      </View>

      <AppButton style={styles.button} onPress={handleRegister} disabled={!isValid || loading} loading={loading}>{t.register.button}</AppButton>
      <View style={styles.footerText}>
        <Text style={[styles.text, { color: paperTheme.colors.onSurfaceVariant }]}>{t.register.accountQuestion} </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.link, { color: paperTheme.colors.primary }]}>{t.register.loginLink}</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
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
  errorText: {
    color: '#DC2626',
    marginBottom: 12,
    fontSize: 13,
  },
});

export default RegisterScreen;
