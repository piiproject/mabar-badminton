import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import ScreenLayout from '../../components/ScreenLayout';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const MySummaryScreen = () => {
  const { paperTheme } = useAppTheme();

  return (
    <ScreenLayout>
      <ScreenHeader title="Ringkasan Saya" />
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        <AppCard>
          <Text style={[styles.label, { color: paperTheme.colors.onSurfaceVariant }]}>Nama Event</Text>
          <Text style={[styles.value, { color: paperTheme.colors.onSurface }]}>Mabar Badminton Jakarta</Text>
          <Text style={[styles.label, { color: paperTheme.colors.onSurfaceVariant, marginTop: 16 }]}>Total Main</Text>
          <Text style={[styles.value, { color: paperTheme.colors.onSurface }]}>3</Text>
          <Text style={[styles.label, { color: paperTheme.colors.onSurfaceVariant, marginTop: 16 }]}>Total Tagihan</Text>
          <Text style={[styles.value, { color: paperTheme.colors.onSurface }]}>Rp120.000</Text>
        </AppCard>
        <AppButton variant="secondary" style={styles.button}>Selesai</AppButton>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  label: { fontSize: 12, fontWeight: '700' },
  value: { fontSize: 20, fontWeight: '800', marginTop: 6 },
  button: { marginTop: 12 },
});

export default MySummaryScreen;
