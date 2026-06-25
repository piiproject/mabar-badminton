import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import AuthPromptModal from '../../components/AuthPromptModal';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';
import { useAppStore } from '../../store/useAppStore';

const EventDetailScreen = ({ navigation, route }: any) => {
  const { paperTheme } = useAppTheme();
  const { user } = useAppStore();
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const event = route?.params?.event ?? {
    title: 'Mabar Badminton Jakarta',
    city: 'Jakarta',
    venue: 'GBK Sports Center',
    date: 'Sabtu, 28 Juni 2026',
    time: '14:00 - 18:00',
    courts: 4,
    slots: 24,
    price: 'Rp60.000',
    organizer: 'Smart Mabar',
    registered: 18,
  };

  const remainingSlots = useMemo(() => event.slots - event.registered, [event]);

  const handleJoin = () => {
    if (!user) {
      setShowAuthPrompt(true);
      return;
    }
    // ensure profile completeness
    if (!user.fullName || !user.phone) {
      // redirect to profile to complete data
      navigation.navigate('Profile');
      return;
    }
    navigation.navigate('Main', { screen: 'MyEvents' });
  };

  return (
    <View style={[globalStyles.page, { backgroundColor: paperTheme.colors.background }]}> 
      <ScreenHeader title="Detail Event" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        <AppCard style={styles.bannerCard}>
          <Text style={[styles.bannerTitle, { color: paperTheme.colors.onSurface }]}>{event.title}</Text>
          <Text style={[styles.bannerSubtitle, { color: paperTheme.colors.onSurfaceVariant }]}>{event.city} • {event.venue}</Text>
        </AppCard>

        <AppCard>
          <DetailRow label="Tanggal" value={event.date} textColor={paperTheme.colors.onSurface} hintColor={paperTheme.colors.onSurfaceVariant} />
          <DetailRow label="Jam" value={event.time} textColor={paperTheme.colors.onSurface} hintColor={paperTheme.colors.onSurfaceVariant} />
          <DetailRow label="Jumlah Lapangan" value={`${event.courts}`} textColor={paperTheme.colors.onSurface} hintColor={paperTheme.colors.onSurfaceVariant} />
          <DetailRow label="Jumlah Slot" value={`${event.slots}`} textColor={paperTheme.colors.onSurface} hintColor={paperTheme.colors.onSurfaceVariant} />
          <DetailRow label="Slot Tersisa" value={`${remainingSlots}`} textColor={paperTheme.colors.onSurface} hintColor={paperTheme.colors.onSurfaceVariant} />
          <DetailRow label="Harga Charge" value={event.price} textColor={paperTheme.colors.onSurface} hintColor={paperTheme.colors.onSurfaceVariant} />
          <DetailRow label="Penyelenggara" value={event.organizer} textColor={paperTheme.colors.onSurface} hintColor={paperTheme.colors.onSurfaceVariant} />
        </AppCard>

        <AppButton style={styles.joinButton} onPress={handleJoin}>Join Mabar</AppButton>
      </ScrollView>

      <AuthPromptModal
        visible={showAuthPrompt}
        onDismiss={() => setShowAuthPrompt(false)}
        onLogin={() => {
          setShowAuthPrompt(false);
          navigation.navigate('Main', { screen: 'Login' });
        }}
        onRegister={() => {
          setShowAuthPrompt(false);
          navigation.navigate('Register');
        }}
      />
    </View>
  );
};

const DetailRow = ({ label, value, textColor, hintColor }: { label: string; value: string; textColor: string; hintColor: string }) => (
  <View style={styles.detailRow}>
    <Text style={[styles.label, { color: hintColor }]}>{label}</Text>
    <Text style={[styles.value, { color: textColor }]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  bannerCard: { paddingVertical: 24, marginBottom: 20 },
  bannerTitle: { fontSize: 22, fontWeight: '800', marginBottom: 8 },
  bannerSubtitle: { fontSize: 14 },
  detailRow: { marginBottom: 16 },
  label: { fontSize: 12, fontWeight: '600' },
  value: { fontSize: 16, marginTop: 6 },
  joinButton: { marginTop: 20 },
});

export default EventDetailScreen;
