import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import ScreenHeader from '../components/ScreenHeader';
import { globalStyles, useAppTheme } from '../theme/baseStyles';
import { useAppStore } from '../store/useAppStore';

const ProfileScreen = ({ navigation }: any) => {
  const { paperTheme, mode, setMode, isDark } = useAppTheme();
  const { user, logout } = useAppStore();

  return (
    <View style={[globalStyles.page, { backgroundColor: paperTheme.colors.background }]}> 
      <ScreenHeader title="Profil" />
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        <AppCard>
          <Text style={[styles.name, { color: paperTheme.colors.onSurface }]}>{user?.fullName ?? 'Pengguna Mabar'}</Text>
          <Text style={[styles.meta, { color: paperTheme.colors.onSurfaceVariant }]}>{user?.email ?? 'belum.login@example.com'}</Text>
          <Text style={[styles.detail, { color: paperTheme.colors.onSurfaceVariant }]}>{user?.phone ?? 'Belum terdaftar'}</Text>
          <Text style={[styles.detail, { color: paperTheme.colors.onSurfaceVariant }]}>{user?.city ? `Domisili ${user.city}` : 'Domisili belum diatur'}</Text>
        </AppCard>

        <AppCard style={styles.sectionCard}>
          <MenuItem label="Edit Profil" onPress={() => {}} />
          <MenuItem label="Event Saya" onPress={() => navigation.navigate('MyEvents')} />
          <MenuItem label="Riwayat Mabar" onPress={() => navigation.navigate('MyEvents')} />
          <MenuItem label="Pengaturan Tema" onPress={() => {}} />
        </AppCard>

        <AppCard>
          <View style={styles.row}>
            <View>
              <Text style={[styles.settingLabel, { color: paperTheme.colors.onSurface }]}>Mode Tema</Text>
              <Text style={[styles.settingHint, { color: paperTheme.colors.onSurfaceVariant }]}>Gunakan Light, Dark, atau System</Text>
            </View>
            <View style={styles.switchContainer}>
              <AppButton variant="secondary" style={styles.themeToggle} onPress={() => setMode(mode === 'dark' ? 'light' : 'dark')}>{isDark ? 'Light' : 'Dark'}</AppButton>
            </View>
          </View>
          <View style={styles.modesRow}>
            <AppButton variant={mode === 'light' ? 'secondary' : 'outline'} style={styles.modeButton} onPress={() => setMode('light')}>Light</AppButton>
            <AppButton variant={mode === 'dark' ? 'secondary' : 'outline'} style={styles.modeButton} onPress={() => setMode('dark')}>Dark</AppButton>
            <AppButton variant={mode === 'system' ? 'secondary' : 'outline'} style={styles.modeButton} onPress={() => setMode('system')}>System</AppButton>
          </View>
        </AppCard>

        <AppButton variant="danger" style={styles.logoutButton} onPress={() => {
          logout();
          navigation.navigate('Home');
        }}>
          Logout
        </AppButton>
      </ScrollView>
    </View>
  );
};

const MenuItem = ({ label, onPress }: { label: string; onPress: () => void }) => {
  const { paperTheme } = useAppTheme();
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={[styles.menuLabel, { color: paperTheme.colors.onSurface }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: { fontSize: 20, fontWeight: '700' },
  meta: { fontSize: 14, marginTop: 6 },
  detail: { fontSize: 14, marginTop: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  switchContainer: { alignItems: 'center' },
  settingLabel: { fontSize: 16, fontWeight: '700' },
  settingHint: { fontSize: 14, marginTop: 4 },
  modesRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  modeButton: { flex: 1, marginHorizontal: 4 },
  sectionCard: { marginTop: 16 },
  menuItem: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
  menuLabel: { fontSize: 16 },
  themeToggle: { minWidth: 100 },
  logoutButton: { marginTop: 24 },
});

export default ProfileScreen;
