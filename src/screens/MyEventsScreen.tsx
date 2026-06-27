import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import ScreenHeader from '../components/ScreenHeader';
import ScreenLayout from '../components/ScreenLayout';
import { globalStyles, useAppTheme } from '../theme/baseStyles';

const followedEvents = [
  {
    id: 'f1',
    title: 'Mabar Badminton Jakarta',
    city: 'Jakarta',
    date: '28 Juni 2026',
    time: '14:00 - 18:00',
    status: 'Akan Datang',
  },
  {
    id: 'f2',
    title: 'Denpasar Weekend Rally',
    city: 'Denpasar',
    date: '12 Juli 2026',
    time: '08:00 - 13:00',
    status: 'Akan Datang',
  },
];

const createdEvents = [
  {
    id: 'c1',
    title: 'Bandung Smash Festival',
    city: 'Bandung',
    date: '2 Juli 2026',
    time: '10:00 - 15:00',
    status: 'Dipublikasikan',
  },
];

const MyEventsScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();
  const [activeTab, setActiveTab] = useState<'followed' | 'created'>('followed');

  const items = activeTab === 'followed' ? followedEvents : createdEvents;

  return (
    <ScreenLayout>
      <ScreenHeader title="Event Saya" subtitle="Event yang diikuti dan dibuat" />
      <View style={styles.tabRow}>
        <AppButton
          variant={activeTab === 'followed' ? 'secondary' : 'outline'}
          style={[styles.tabButton, activeTab === 'followed' ? styles.activeTab : null]}
          onPress={() => setActiveTab('followed')}
        >
          Event Diikuti
        </AppButton>
        <AppButton
          variant={activeTab === 'created' ? 'secondary' : 'outline'}
          style={[styles.tabButton, activeTab === 'created' ? styles.activeTab : null]}
          onPress={() => setActiveTab('created')}
        >
          Event Saya
        </AppButton>
      </View>
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        {items.map((item) => (
          <AppCard key={item.id} style={styles.card}>
            <Text style={[styles.eventTitle, { color: paperTheme.colors.onSurface }]}>{item.title}</Text>
            <Text style={[styles.eventMeta, { color: paperTheme.colors.onSurfaceVariant }]}>{item.city}</Text>
            <Text style={[styles.eventMeta, { color: paperTheme.colors.onSurfaceVariant }]}>{item.date} • {item.time}</Text>
            <Text style={[styles.eventStatus, { color: paperTheme.colors.onSurface }]}>{item.status}</Text>
            <AppButton variant="secondary" style={styles.detailButton} onPress={() => navigation.navigate('EventDetail', { event: item })}>Detail Event</AppButton>
          </AppCard>
        ))}
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  tabButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  activeTab: {
    borderColor: 'transparent',
  },
  card: {
    marginBottom: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  eventMeta: {
    fontSize: 14,
    marginBottom: 4,
  },
  eventStatus: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '700',
  },
  detailButton: {
    marginTop: 12,
  },
});

export default MyEventsScreen;
