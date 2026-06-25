import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Card, useTheme } from 'react-native-paper';

type AppCardProps = React.ComponentProps<typeof Card> & {
  style?: ViewStyle;
};

const AppCard: React.FC<AppCardProps> = ({ style, children, ...props }) => {
  const theme = useTheme();

  return (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }, style]} {...props}>
      <Card.Content>{children}</Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
});

export default AppCard;
