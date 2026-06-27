import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import ScreenLayout from '../../components/ScreenLayout';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const summaryCards = [
  { label: 'Event Aktif', value: '2' },
  { label: 'Pemain Hadir', value: '18' },
  { label: 'Lapangan Aktif', value: '4' },
  { label: 'Match Berjalan', value: '1' },
];

const AdminDashboardScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <ScreenLayout>
      <ScreenHeader title="Dashboard" subtitle="Ringkasan event dan aksi cepat" />
      <View style={styles.summaryGrid}>
          {summaryCards.map((item) => (
            <AppCard key={item.label} style={styles.summaryCard}>
              <Text style={[styles.cardValue, { color: paperTheme.colors.onSurface }]}>{item.value}</Text>
              <Text style={[styles.cardLabel, { color: paperTheme.colors.onSurfaceVariant }]}>{item.label}</Text>
            </AppCard>
          ))}
        </View>

        <View style={styles.quickActions}>
          <Text style={[globalStyles.sectionTitle, { color: paperTheme.colors.onSurface }]}>Quick Action</Text>
          <AppButton style={styles.actionButton} onPress={() => navigation.navigate('CreateEvent')}>Buat Event</AppButton>
          <AppButton variant="secondary" style={styles.actionButton} onPress={() => navigation.navigate('Attendance')}>Daftar Hadir</AppButton>
          <AppButton variant="outline" style={styles.actionButton} onPress={() => navigation.navigate('MatchSchedule')}>Jadwal Pertandingan</AppButton>
          <AppButton variant="danger" style={styles.actionButton} onPress={() => navigation.navigate('EventSummary')}>Rekap Event</AppButton>
        </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  summaryGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  summaryCard: { width: '48%', paddingVertical: 18 },
  cardValue: { fontSize: 28, fontWeight: '800' },
  cardLabel: { fontSize: 14, marginTop: 8 },
  quickActions: { marginTop: 24 },
  actionButton: { marginBottom: 12 },
});

export default AdminDashboardScreen;
