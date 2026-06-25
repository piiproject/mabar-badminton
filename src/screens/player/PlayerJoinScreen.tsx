import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const PlayerJoinScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <View style={[globalStyles.page, { backgroundColor: paperTheme.colors.background }]}> 
      <ScreenHeader title="Join Event" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        <AppCard>
          <AppInput label="Kode Mabar" style={styles.input} />
          <AppInput label="Nama Lengkap" style={styles.input} />
          <AppInput label="Nomor WhatsApp" keyboardType="phone-pad" style={styles.input} />
          <AppInput label="Kelas Bermain" style={styles.input} />
        </AppCard>
        <AppButton onPress={() => navigation.navigate('PlayerTabs')} style={styles.button}>Hadir Sekarang</AppButton>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: { marginBottom: 16 },
  button: { marginTop: 8 },
});

export default PlayerJoinScreen;
