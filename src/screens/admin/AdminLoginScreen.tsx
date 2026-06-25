import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import ScreenHeader from '../../components/ScreenHeader';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const AdminLoginScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <View style={[globalStyles.page, { backgroundColor: paperTheme.colors.background }]}> 
      <ScreenHeader title="Admin Login" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        <Text style={[styles.label, { color: paperTheme.colors.onSurfaceVariant }]}>Masuk untuk mengelola event dan peserta.</Text>
        <AppInput label="Email" keyboardType="email-address" autoCapitalize="none" style={styles.input} />
        <AppInput label="Password" secureTextEntry style={styles.input} />
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.link, { color: paperTheme.colors.primary }]}>Lupa Password?</Text>
        </TouchableOpacity>
        <AppButton onPress={() => navigation.navigate('AdminTabs')} style={styles.button}>Login</AppButton>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  label: { fontSize: 14, marginBottom: 20 },
  input: { marginBottom: 16 },
  link: { fontSize: 14, marginBottom: 24, fontWeight: '600' },
  button: { marginTop: 4 },
});

export default AdminLoginScreen;
