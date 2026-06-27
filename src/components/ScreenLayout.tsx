import React from 'react';
import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { globalStyles, useAppTheme } from '../theme/baseStyles';

type ScreenLayoutProps = {
  children: React.ReactNode;
  scroll?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  scrollViewStyle?: StyleProp<ViewStyle>;
  keyboardShouldPersistTaps?: 'never' | 'always' | 'handled';
};

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  scroll = true,
  contentContainerStyle,
  style,
  scrollViewStyle,
  keyboardShouldPersistTaps = 'handled',
}) => {
  const { paperTheme } = useAppTheme();

  return (
    <View style={[globalStyles.page, { backgroundColor: paperTheme.colors.background }, style]}>
      {scroll ? (
        <ScrollView
          style={scrollViewStyle}
          contentContainerStyle={[globalStyles.screenContent, contentContainerStyle]}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </View>
  );
};

export default ScreenLayout;
