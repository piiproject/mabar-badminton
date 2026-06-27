import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import ScreenHeader from '../components/ScreenHeader';
import ScreenLayout from '../components/ScreenLayout';
import { useAppTheme } from '../theme/baseStyles';
import { useAppStore } from '../store/useAppStore';

const LoginScreen = ({ navigation }: any) => {
  const { paperTheme, t } = useAppTheme();
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
      setIdError(t.validation.requiredEmail);
    } else if (identifier.includes('@')) {
      const re = /\S+@\S+\.\S+/;
      if (!re.test(identifier)) setIdError(t.validation.invalidEmail);
      else setIdError(null);
    } else {
      const digits = identifier.replace(/[^0-9]/g, '');
      if (!/^[0-9]+$/.test(digits) || digits.length < 10 || digits.length > 15) setIdError(t.validation.invalidPhone);
      else setIdError(null);
    }

    if (!password) setPassError(t.validation.requiredPassword);
    else if (password.length < 6) setPassError(t.validation.minPassword);
    else setPassError(null);
  };

  useEffect(() => {
    validate();
    setIsValid(!idError && !passError && identifier.length > 0 && password.length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identifier, password, idError, passError]);

  return (
    <ScreenLayout contentContainerStyle={styles.content}>
      <ScreenHeader
        title={t.login.title}
        subtitle={t.login.subtitle}
        showBack
        actionIcon="cog"
        onAction={() => navigation.navigate('LanguageSettings')}
        onBack={() => navigation.goBack()}
      />
      <Text style={[styles.description, { color: paperTheme.colors.onSurfaceVariant }]}>{t.login.description}</Text>
      <AppInput label={t.login.emailWhatsApp} value={identifier} onChangeText={setIdentifier} style={styles.input} autoCapitalize="none" />
      {idError ? <Text style={[styles.errorText]}>{idError}</Text> : null}
      <AppInput label={t.login.password} value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      {passError ? <Text style={[styles.errorText]}>{passError}</Text> : null}
      <TouchableOpacity onPress={() => {}}>
        <Text style={[styles.link, { color: paperTheme.colors.primary }]}>{t.login.forgotPassword}</Text>
      </TouchableOpacity>
      <AppButton style={styles.button} onPress={handleLogin} disabled={!isValid || loading} loading={loading}>{t.login.loginButton}</AppButton>
      <AppButton variant="secondary" style={styles.button} onPress={() => navigation.navigate('Register')} disabled={loading}>{t.login.registerButton}</AppButton>
      <View style={styles.footerText}>
        <Text style={[styles.text, { color: paperTheme.colors.onSurfaceVariant }]}>{t.login.registerQuestion} </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.link, { color: paperTheme.colors.primary }]}>{t.login.registerLink}</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
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
