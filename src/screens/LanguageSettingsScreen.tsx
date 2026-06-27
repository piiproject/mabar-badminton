import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RadioButton, useTheme } from 'react-native-paper';
import ScreenHeader from '../components/ScreenHeader';
import ScreenLayout from '../components/ScreenLayout';
import { useAppTheme } from '../theme/baseStyles';

type LanguageOption = {
  value: 'id' | 'en';
  label: string;
};

const LanguageSettingsScreen = ({ navigation }: any) => {
  const { paperTheme, language, setLanguage, t } = useAppTheme();
  const theme = useTheme();

  const options: LanguageOption[] = [
    { value: 'id', label: t.settings.indonesia },
    { value: 'en', label: t.settings.english },
  ];

  return (
    <ScreenLayout contentContainerStyle={styles.content}>
      <ScreenHeader title={t.settings.title} subtitle={t.settings.subtitle} showBack onBack={() => navigation.goBack()} />
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[styles.optionRow, { borderColor: theme.colors.outline }]}
            onPress={() => setLanguage(option.value)}
            activeOpacity={0.7}
          >
            <View>
              <Text style={[styles.optionLabel, { color: paperTheme.colors.onSurface }]}>{option.label}</Text>
            </View>
            <RadioButton
              value={option.value}
              status={language === option.value ? 'checked' : 'unchecked'}
              onPress={() => setLanguage(option.value)}
              color={paperTheme.colors.primary}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 24,
  },
  optionsContainer: {
    marginTop: 16,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LanguageSettingsScreen;
