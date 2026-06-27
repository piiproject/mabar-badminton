import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import StatusBadge from '../../components/StatusBadge';
import ScreenLayout from '../../components/ScreenLayout';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const matches = [
  { court: 'Lapangan 1', partner: 'Siska Mega', opponent: 'Rian & Dini', status: 'Waiting' as const },
  { court: 'Lapangan 2', partner: 'Tono', opponent: 'Maya & Budi', status: 'Finished' as const },
];

const MyMatchesScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <ScreenLayout>
      <ScreenHeader title="Jadwal Saya" />
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        {matches.map((item) => (
          <AppCard key={item.court} style={styles.card}>
            <Text style={[styles.court, { color: paperTheme.colors.onSurface }]}>{item.court}</Text>
            <Text style={[styles.detail, { color: paperTheme.colors.onSurfaceVariant }]}>Partner: {item.partner}</Text>
            <Text style={[styles.detail, { color: paperTheme.colors.onSurfaceVariant }]}>Lawan: {item.opponent}</Text>
            <StatusBadge status={item.status} />
          </AppCard>
        ))}
        <AppButton onPress={() => navigation.navigate('Queue')} style={styles.button}>Kembali</AppButton>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: 16 },
  court: { fontSize: 16, fontWeight: '700' },
  detail: { fontSize: 14, marginTop: 6 },
  button: { marginTop: 12 },
});

export default MyMatchesScreen;
