import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import AppCard from '../../components/AppCard';
import ScreenHeader from '../../components/ScreenHeader';
import { globalStyles, useAppTheme } from '../../theme/baseStyles';

const EditMatchScreen = ({ navigation }: any) => {
  const { paperTheme } = useAppTheme();

  return (
    <View style={[globalStyles.page, { backgroundColor: paperTheme.colors.background }]}> 
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
    </View>
  );
};

const styles = StyleSheet.create({
  input: { marginBottom: 16 },
});

export default EditMatchScreen;
