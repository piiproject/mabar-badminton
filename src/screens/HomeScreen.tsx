import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Menu, TextInput } from 'react-native-paper';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import { globalStyles, useAppTheme } from '../theme/baseStyles';

const cities = [
  'Semua Kota',
  'Jakarta',
  'Bandung',
  'Bekasi',
  'Bogor',
  'Depok',
  'Tangerang',
  'Surabaya',
  'Semarang',
  'Yogyakarta',
  'Medan',
  'Makassar',
  'Denpasar',
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
  {
    id: '4',
    title: 'Denpasar Weekend Rally',
    city: 'Denpasar',
    venue: 'Lapangan Puputan',
    date: '12 Juli 2026',
    time: '08:00 - 13:00',
    registered: 14,
    capacity: 18,
    price: 'Rp70.000',
    organizer: 'Bali Birdies',
  },
];

const HomeScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('Semua Kota');
  const [cityMenuVisible, setCityMenuVisible] = useState(false);

  const filteredEvents = useMemo(
    () =>
      events.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.organizer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCity = selectedCity === 'Semua Kota' || item.city === selectedCity;
        return matchesSearch && matchesCity;
      }),
    [searchTerm, selectedCity]
  );

  return (
    <View style={[globalStyles.page, { backgroundColor: paperTheme.colors.background }]}> 
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        <View style={styles.headerRow}>
          <View style={[styles.logoCircle, { backgroundColor: paperTheme.colors.primary }]}> 
            <Text style={[styles.logoText, { color: paperTheme.colors.onPrimary }]}>MB</Text>
          </View>
          <View style={styles.headerTextGroup}>
            <Text style={[styles.appTitle, { color: paperTheme.colors.onSurface }]}>Mabar Badminton</Text>
            <Text style={[styles.appSubtitle, { color: paperTheme.colors.onSurfaceVariant }]}>Temukan event badminton di seluruh Indonesia</Text>
          </View>
        </View>

        <TextInput
          mode="outlined"
          placeholder="Cari event badminton"
          value={searchTerm}
          onChangeText={setSearchTerm}
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

        <Text style={[globalStyles.sectionTitle, { color: paperTheme.colors.onSurface }]}>Event Terdekat</Text>
        {filteredEvents.length > 0 ? (
          <AppCard style={styles.featuredCard}>
            <Text style={[styles.eventTitle, { color: paperTheme.colors.onSurface }]}>{filteredEvents[0].title}</Text>
            <Text style={[styles.eventMeta, { color: paperTheme.colors.onSurfaceVariant }]}>{filteredEvents[0].city} • {filteredEvents[0].venue}</Text>
            <Text style={[styles.eventMeta, { color: paperTheme.colors.onSurfaceVariant }]}>{filteredEvents[0].date} • {filteredEvents[0].time}</Text>
            <Text style={[styles.eventStat, { color: paperTheme.colors.onSurface }]}>Pemain: {filteredEvents[0].registered}/{filteredEvents[0].capacity}</Text>
            <Text style={[styles.eventStat, { color: paperTheme.colors.onSurface }]}>Harga: {filteredEvents[0].price}</Text>
            <AppButton style={styles.detailButton} onPress={() => navigation.navigate('EventDetail', { event: filteredEvents[0] })}>Lihat Detail</AppButton>
          </AppCard>
        ) : (
          <Text style={[styles.emptyText, { color: paperTheme.colors.onSurfaceVariant }]}>Tidak ada event sesuai filter.</Text>
        )}

        <Text style={[globalStyles.sectionTitle, { color: paperTheme.colors.onSurface }]}>Semua Event</Text>
        {filteredEvents.map((item) => (
          <AppCard key={item.id} style={styles.eventCard}>
            <Text style={[styles.eventTitle, { color: paperTheme.colors.onSurface }]}>{item.title}</Text>
            <Text style={[styles.eventMeta, { color: paperTheme.colors.onSurfaceVariant }]}>{item.city} • {item.venue}</Text>
            <Text style={[styles.eventMeta, { color: paperTheme.colors.onSurfaceVariant }]}>{item.date} • {item.time}</Text>
            <Text style={[styles.eventStat, { color: paperTheme.colors.onSurface }]}>{item.registered}/{item.capacity} pemain terdaftar</Text>
            <AppButton variant="secondary" style={styles.detailButton} onPress={() => navigation.navigate('EventDetail', { event: item })}>Lihat Detail</AppButton>
          </AppCard>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoCircle: {
    width: 56,
    height: 56,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
  },
  headerTextGroup: {
    flex: 1,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 14,
    lineHeight: 20,
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
  featuredCard: {
    padding: 20,
    marginBottom: 24,
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
    marginBottom: 24,
  },
});

export default HomeScreen;
