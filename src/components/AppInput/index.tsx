import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

type AppInputProps = React.ComponentProps<typeof TextInput> & {
  label: string;
};

const AppInput: React.FC<AppInputProps> = ({ style, mode = 'outlined', ...props }) => {
  const theme = useTheme();

  return (
    <TextInput
      mode={mode}
      style={[styles.input, style]}
      outlineColor={theme.colors.outline}
      activeOutlineColor={theme.colors.primary}
      textColor={theme.colors.onSurface}
      placeholderTextColor={theme.colors.inverseOnSurface}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 16,
    backgroundColor: 'transparent',
  },
});

export default AppInput;
