import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import ScreenLayout from '../../components/ScreenLayout';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const EditMatchScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <ScreenLayout>
      <ScreenHeader title="Edit Match" showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.screenContent}>
        <AppCard>
          <AppInput label="Tim A" style={styles.input} />
          <AppInput label="Tim B" style={styles.input} />
          <AppInput label="Pengganti / Cadangan" style={styles.input} />
          <AppInput label="Catatan" multiline numberOfLines={3} style={styles.input} />
        </AppCard>
        <AppButton onPress={() => navigation.goBack()}>Simpan Perubahan</AppButton>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  input: { marginBottom: 16 },
});

export default EditMatchScreen;
