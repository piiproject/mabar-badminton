import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import ScreenLayout from '../../components/ScreenLayout';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const ShuttlecockInputScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <ScreenLayout>
      <ScreenHeader title="Input Shuttlecock" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        <AppCard>
          <AppInput label="Jumlah Shuttlecock Terpakai" keyboardType="numeric" style={styles.input} />
          <AppInput label="Catatan (opsional)" multiline numberOfLines={4} style={styles.input} />
        </AppCard>
        <View style={styles.buttonsRow}>
          <AppButton variant="outline" style={styles.button}>Simpan</AppButton>
          <AppButton style={styles.button}>Generate Match Berikutnya</AppButton>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  input: { marginBottom: 16 },
  buttonsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  button: { flex: 1, marginHorizontal: 4 },
});

export default ShuttlecockInputScreen;
