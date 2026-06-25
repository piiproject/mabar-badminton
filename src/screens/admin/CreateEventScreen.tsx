import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const CreateEventScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <View style={[globalStyles.page, { backgroundColor: paperTheme.colors.background }]}> 
      <ScreenHeader title="Buat Event" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        <AppCard>
          <AppInput label="Nama Event" style={styles.input} />
          <AppInput label="Tanggal" style={styles.input} />
          <AppInput label="Jam Mulai" style={styles.input} />
          <AppInput label="Jam Selesai" style={styles.input} />
          <AppInput label="Jumlah Lapangan" style={styles.input} />
          <AppInput label="Maksimal Pemain" style={styles.input} />
          <AppInput label="Charge Pemain" style={styles.input} />
          <AppInput label="Harga Shuttlecock" style={styles.input} />
        </AppCard>
        <View style={styles.bottomActions}>
          <AppButton variant="secondary" style={styles.button}>Generate Kode Mabar</AppButton>
          <AppButton style={styles.button} onPress={() => navigation.navigate('EventDetail')}>Simpan Event</AppButton>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: { marginBottom: 16 },
  bottomActions: { marginTop: 16 },
  button: { marginBottom: 12 },
});

export default CreateEventScreen;
