import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import StatusBadge from '../../components/StatusBadge';
import CountdownTimer from '../../components/CountdownTimer';
import ScreenLayout from '../../components/ScreenLayout';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const matches = [
  { court: 'Lapangan 1', teamA: 'Andi & Siska', teamB: 'Rian & Dini', status: 'Playing' as const },
  { court: 'Lapangan 2', teamA: 'Tono & Indra', teamB: 'Maya & Budi', status: 'Waiting' as const },
];

const MatchScheduleScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <ScreenLayout>
      <ScreenHeader title="Jadwal Pertandingan" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        {matches.map((item) => (
          <AppCard key={item.court} style={styles.matchCard}>
            <View style={styles.rowTop}>
              <View>
                <Text style={[styles.court, { color: paperTheme.colors.onSurface }]}>{item.court}</Text>
                <Text style={[styles.teams, { color: paperTheme.colors.onSurfaceVariant }]}>{item.teamA} vs {item.teamB}</Text>
              </View>
              <StatusBadge status={item.status} />
            </View>
            <CountdownTimer seconds={1500} />
            <View style={styles.buttonRow}>
              <AppButton variant="outline" style={styles.smallButton} onPress={() => navigation.navigate('EditMatch')}>Edit Match</AppButton>
              <AppButton variant="secondary" style={styles.smallButton}>Mulai Match</AppButton>
              <AppButton variant="danger" style={styles.smallButton}>Selesai Match</AppButton>
            </View>
          </AppCard>
        ))}
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  matchCard: { marginBottom: 16 },
  rowTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  court: { fontSize: 16, fontWeight: '700' },
  teams: { fontSize: 14, marginTop: 4 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  smallButton: { flex: 1, marginHorizontal: 4 },
});

export default MatchScheduleScreen;
