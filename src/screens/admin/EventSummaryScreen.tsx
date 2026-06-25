import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const players = [
  { name: 'Andi Wijaya', plays: 3, total: 'Rp120.000' },
  { name: 'Siska Mega', plays: 2, total: 'Rp80.000' },
  { name: 'Rian Pratama', plays: 1, total: 'Rp40.000' },
];

const EventSummaryScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <View style={[globalStyles.page, { backgroundColor: paperTheme.colors.background }]}> 
      <ScreenHeader title="Rekap Event" showBack onBack={() => navigation.goBack()} />
      <View style={styles.statsRow}>
        <AppCard style={styles.statCard}>
          <Text style={[styles.statLabel, { color: paperTheme.colors.onSurfaceVariant }]}>Total Pemain</Text>
          <Text style={[styles.statValue, { color: paperTheme.colors.onSurface }]}>22</Text>
        </AppCard>
        <AppCard style={styles.statCard}>
          <Text style={[styles.statLabel, { color: paperTheme.colors.onSurfaceVariant }]}>Total Match</Text>
          <Text style={[styles.statValue, { color: paperTheme.colors.onSurface }]}>16</Text>
        </AppCard>
        <AppCard style={styles.statCard}>
          <Text style={[styles.statLabel, { color: paperTheme.colors.onSurfaceVariant }]}>Total Shuttlecock</Text>
          <Text style={[styles.statValue, { color: paperTheme.colors.onSurface }]}>72</Text>
        </AppCard>
      </View>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <AppCard>
            <View style={styles.itemRow}>
              <View>
                <Text style={[styles.name, { color: paperTheme.colors.onSurface }]}>{item.name}</Text>
                <Text style={[styles.meta, { color: paperTheme.colors.onSurfaceVariant }]}>{item.plays}x main</Text>
              </View>
              <Text style={[styles.total, { color: paperTheme.colors.primary }]}>{item.total}</Text>
            </View>
          </AppCard>
        )}
      />
      <View style={styles.actions}>
        <AppButton variant="outline" style={styles.actionButton}>Export PDF</AppButton>
        <AppButton variant="secondary" style={styles.actionButton}>Bagikan Rekap</AppButton>
        <AppButton variant="danger" style={styles.actionButton}>Tutup Event</AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 16 },
  statCard: { width: '32%', paddingVertical: 18 },
  statLabel: { fontSize: 12, marginBottom: 6 },
  statValue: { fontSize: 22, fontWeight: '800' },
  list: { paddingBottom: 16 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 16, fontWeight: '700' },
  meta: { fontSize: 12, marginTop: 4 },
  total: { fontSize: 16, fontWeight: '700' },
  actions: { marginTop: 16 },
  actionButton: { marginBottom: 12 },
});

export default EventSummaryScreen;
