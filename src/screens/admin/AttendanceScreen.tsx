import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const attendees = [
  { name: 'Andi Wijaya', phone: '+62 812 3456 7890', kelas: 'Intermediate', checkIn: '13:05' },
  { name: 'Siska Mega', phone: '+62 813 1234 5678', kelas: 'Advance', checkIn: '13:12' },
  { name: 'Rian Pratama', phone: '+62 811 9876 5432', kelas: 'Pemula', checkIn: '13:20' },
];

const AttendanceScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <View style={[globalStyles.page, { backgroundColor: paperTheme.colors.background }]}> 
      <ScreenHeader title="Daftar Hadir" showBack onBack={() => navigation.goBack()} />
      <View style={globalStyles.actionsRow}>
        <AppButton variant="outline" style={styles.actionButton}>Refresh</AppButton>
        <AppButton variant="secondary" style={styles.actionButton}>Export</AppButton>
        <AppButton style={styles.actionButton}>Generate Jadwal Pertama</AppButton>
      </View>
      <FlatList
        data={attendees}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <AppCard>
            <Text style={[styles.name, { color: paperTheme.colors.onSurface }]}>{item.name}</Text>
            <Text style={[styles.meta, { color: paperTheme.colors.onSurfaceVariant }]}>{item.phone}</Text>
            <View style={styles.row}>
              <Text style={[styles.badge, { color: paperTheme.colors.primary }]}>{item.kelas}</Text>
              <Text style={[styles.checkin, { color: paperTheme.colors.onSurfaceVariant }]}>Check-in {item.checkIn}</Text>
            </View>
          </AppCard>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: { flex: 1, padding: 24 },
  actionsRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginBottom: 16 },
  actionButton: { flex: 1 },
  list: { paddingBottom: 24 },
  name: { fontSize: 16, fontWeight: '700' },
  meta: { fontSize: 14, marginTop: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  badge: { fontSize: 12, fontWeight: '700' },
  checkin: { fontSize: 12 },
});

export default AttendanceScreen;
