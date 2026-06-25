import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

export type AppButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

type AppButtonProps = Omit<React.ComponentProps<typeof Button>, 'style'> & {
  variant?: AppButtonVariant;
  style?: StyleProp<ViewStyle>;
};

const variantStyles: Record<AppButtonVariant, { mode: 'contained' | 'outlined'; color: string }> = {
  primary: { mode: 'contained', color: '#22C55E' },
  secondary: { mode: 'contained', color: '#2563EB' },
  outline: { mode: 'outlined', color: '#0F172A' },
  danger: { mode: 'contained', color: '#DC2626' },
};

const AppButton: React.FC<AppButtonProps> = ({ variant = 'primary', style, ...props }) => {
  const theme = useTheme();
  const { mode, color } = variantStyles[variant];

  return (
    <View style={[styles.wrapper, style]}>
      <Button
        mode={mode}
        buttonColor={color}
        textColor={theme.colors.onPrimary}
        contentStyle={styles.content}
        style={styles.button}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { width: '100%' },
  button: { borderRadius: 16 },
  content: { height: 52 },
});

export default AppButton;
