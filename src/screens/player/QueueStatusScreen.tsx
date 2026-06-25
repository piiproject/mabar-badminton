import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import StatusBadge from '../../components/StatusBadge';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const QueueStatusScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <View style={[globalStyles.page, { backgroundColor: paperTheme.colors.background }]}> 
      <ScreenHeader title="Status Antrean" />
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        <AppCard style={styles.card}>
          <Text style={[styles.label, { color: paperTheme.colors.onSurfaceVariant }]}>Nama</Text>
          <Text style={[styles.value, { color: paperTheme.colors.onSurface }]}>Andi Wijaya</Text>
          <Text style={[styles.label, { color: paperTheme.colors.onSurfaceVariant, marginTop: 16 }]}>Kelas</Text>
          <Text style={[styles.value, { color: paperTheme.colors.onSurface }]}>Intermediate</Text>
          <Text style={[styles.label, { color: paperTheme.colors.onSurfaceVariant, marginTop: 16 }]}>Nomor Antrean</Text>
          <Text style={[styles.value, { color: paperTheme.colors.onSurface }]}>#12</Text>
          <StatusBadge status="Waiting" />
        </AppCard>
        <AppCard>
          <Text style={[styles.info, { color: paperTheme.colors.onSurface }]}>Pemain Menunggu: 6</Text>
          <Text style={[styles.info, { color: paperTheme.colors.onSurface }]}>Lapangan Aktif: 4</Text>
          <Text style={[styles.info, { color: paperTheme.colors.onSurface }]}>Estimasi Giliran: 20 menit</Text>
        </AppCard>
        <View style={styles.actions}>
          <AppButton variant="outline" style={styles.button}>Refresh</AppButton>
          <AppButton style={styles.button} onPress={() => navigation.navigate('Matches')}>Lihat Jadwal Saya</AppButton>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: 16 },
  label: { fontSize: 12, fontWeight: '700' },
  value: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  info: { fontSize: 14, marginBottom: 10 },
  actions: { marginTop: 12 },
  button: { marginBottom: 12 },
});

export default QueueStatusScreen;
