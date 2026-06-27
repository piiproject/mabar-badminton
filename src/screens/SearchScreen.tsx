import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Menu, TextInput } from 'react-native-paper';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import ScreenHeader from '../components/ScreenHeader';
import ScreenLayout from '../components/ScreenLayout';
import { useAppTheme } from '../theme/baseStyles';

const cities = [
  'Semua Kota',
  'Jakarta',
  'Bandung',
  'Bekasi',
  'Bogor',
  'Depok',
  'Tangerang',
  'Surabaya',
];

const events = [
  {
    id: '1',
    title: 'Mabar Badminton Jakarta',
    city: 'Jakarta',
    venue: 'GBK Sports Center',
    date: '28 Juni 2026',
    time: '14:00 - 18:00',
    registered: 18,
    capacity: 24,
    price: 'Rp60.000',
    organizer: 'Smart Mabar',
  },
  {
    id: '2',
    title: 'Bandung Smash Festival',
    city: 'Bandung',
    venue: 'GOR Arcamanik',
    date: '2 Juli 2026',
    time: '10:00 - 15:00',
    registered: 12,
    capacity: 20,
    price: 'Rp55.000',
    organizer: 'Bandung Badminton Club',
  },
  {
    id: '3',
    title: 'Semarang Evening Mabar',
    city: 'Semarang',
    venue: 'Stadion Jatidiri',
    date: '5 Juli 2026',
    time: '16:00 - 20:00',
    registered: 20,
    capacity: 24,
    price: 'Rp45.000',
    organizer: 'Semarang Smashers',
  },
];

const SearchScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();
  const [query, setQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Semua Kota');
  const [cityMenuVisible, setCityMenuVisible] = useState(false);

  const filteredEvents = useMemo(
    () =>
      events.filter((item) => {
        const lowerQuery = query.toLowerCase();
        const matchesSearch = item.title.toLowerCase().includes(lowerQuery) || item.organizer.toLowerCase().includes(lowerQuery);
        const matchesCity = selectedCity === 'Semua Kota' || item.city === selectedCity;
        return matchesSearch && matchesCity;
      }),
    [query, selectedCity]
  );

  return (
    <ScreenLayout contentContainerStyle={styles.content}>
      <ScreenHeader title="Cari Event" subtitle="Temukan event berdasarkan nama atau penyelenggara" />
      <TextInput
        mode="outlined"
        placeholder="Cari nama event atau penyelenggara"
        value={query}
        onChangeText={setQuery}
        style={styles.searchInput}
        outlineColor={paperTheme.colors.outline}
        activeOutlineColor={paperTheme.colors.primary}
      />

      <View style={styles.filterRow}>
          <Menu
            visible={cityMenuVisible}
            onDismiss={() => setCityMenuVisible(false)}
            anchor={
              <TouchableOpacity
                style={[styles.filterButton, { backgroundColor: paperTheme.colors.surface, borderColor: paperTheme.colors.outline }]}
                onPress={() => setCityMenuVisible(true)}
              >
                <Text style={[styles.filterText, { color: paperTheme.colors.onSurface }]}>{selectedCity}</Text>
              </TouchableOpacity>
            }
          >
            {cities.map((city) => (
              <Menu.Item
                key={city}
                onPress={() => {
                  setSelectedCity(city);
                  setCityMenuVisible(false);
                }}
                title={city}
              />
            ))}
          </Menu>
        </View>

        {filteredEvents.length === 0 ? (
          <Text style={[styles.emptyText, { color: paperTheme.colors.onSurfaceVariant }]}>Tidak ada event yang cocok.</Text>
        ) : (
          filteredEvents.map((item) => (
            <AppCard key={item.id} style={styles.eventCard}>
              <Text style={[styles.eventTitle, { color: paperTheme.colors.onSurface }]}>{item.title}</Text>
              <Text style={[styles.eventMeta, { color: paperTheme.colors.onSurfaceVariant }]}>{item.city} • {item.venue}</Text>
              <Text style={[styles.eventMeta, { color: paperTheme.colors.onSurfaceVariant }]}>{item.date} • {item.time}</Text>
              <Text style={[styles.eventStat, { color: paperTheme.colors.onSurface }]}>{item.registered}/{item.capacity} pemain terdaftar</Text>
              <AppButton variant="secondary" style={styles.detailButton} onPress={() => navigation.navigate('EventDetail', { event: item })}>Lihat Detail</AppButton>
            </AppCard>
          ))
        )}
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 24,
  },
  searchInput: {
    marginBottom: 16,
    borderRadius: 16,
  },
  filterRow: {
    marginBottom: 24,
  },
  filterButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  filterText: {
    fontSize: 14,
  },
  eventCard: {
    padding: 18,
    marginBottom: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  eventMeta: {
    fontSize: 14,
    marginBottom: 6,
  },
  eventStat: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
  },
  detailButton: {
    marginTop: 16,
  },
  emptyText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default SearchScreen;
