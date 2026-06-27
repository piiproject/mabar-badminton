import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import ScreenLayout from '../../components/ScreenLayout';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const CreateEventScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [courts, setCourts] = useState('');
  const [capacity, setCapacity] = useState('');
  const [charge, setCharge] = useState('');

  return (
    <ScreenLayout>
      <ScreenHeader title="Buat Event" showBack onBack={() => navigation.goBack()} />
      <AppCard>
        <AppInput label="Nama Event" value={name} onChangeText={setName} style={styles.input} />
        <AppInput label="Kota" value={city} onChangeText={setCity} style={styles.input} />
        <AppInput label="Lokasi" value={venue} onChangeText={setVenue} style={styles.input} />
        <AppInput label="Tanggal" value={date} onChangeText={setDate} style={styles.input} />
        <AppInput label="Jam Mulai" value={startTime} onChangeText={setStartTime} style={styles.input} />
        <AppInput label="Jam Selesai" value={endTime} onChangeText={setEndTime} style={styles.input} />
        <AppInput label="Jumlah Lapangan" value={courts} onChangeText={setCourts} style={styles.input} />
        <AppInput label="Maksimal Pemain" value={capacity} onChangeText={setCapacity} style={styles.input} />
        <AppInput label="Charge Pemain" value={charge} onChangeText={setCharge} style={styles.input} />
      </AppCard>
      <View style={styles.bottomActions}>
        <AppButton variant="secondary" style={styles.button}>Generate Kode Mabar</AppButton>
        <AppButton style={styles.button} onPress={() => {
          if (!name || !city || !venue || !date || !startTime || !endTime || !courts || !capacity || !charge) {
            Alert.alert('Lengkapi data event terlebih dahulu.');
            return;
          }
          navigation.navigate('EventDetail');
        }}>Simpan Event</AppButton>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  input: { marginBottom: 16 },
  bottomActions: { marginTop: 16 },
  button: { marginBottom: 12 },
});

export default CreateEventScreen;
