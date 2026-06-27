import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import ScreenLayout from '../../components/ScreenLayout';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const PlayerJoinScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <ScreenLayout>
      <ScreenHeader title="Join Event" showBack onBack={() => navigation.goBack()} />
      <AppCard>
        <AppInput label="Kode Mabar" style={styles.input} />
        <AppInput label="Nama Lengkap" style={styles.input} />
        <AppInput label="Nomor WhatsApp" keyboardType="phone-pad" style={styles.input} />
        <AppInput label="Kelas Bermain" style={styles.input} />
      </AppCard>
      <AppButton onPress={() => navigation.navigate('PlayerTabs')} style={styles.button}>Hadir Sekarang</AppButton>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  input: { marginBottom: 16 },
  button: { marginTop: 8 },
});

export default PlayerJoinScreen;
