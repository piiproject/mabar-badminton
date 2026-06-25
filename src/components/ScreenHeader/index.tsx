import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  actionIcon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  onAction?: () => void;
};

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, subtitle, showBack = false, onBack, actionIcon, onAction }) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { borderBottomColor: theme.colors.outline }]}> 
      <View style={styles.row}>
        {showBack ? (
          <TouchableOpacity onPress={onBack} style={styles.iconButton}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={theme.colors.onSurface} />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
        <View style={styles.textGroup}>
          <Text style={[styles.title, { color: theme.colors.onSurface }]}>{title}</Text>
          {subtitle ? <Text style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>{subtitle}</Text> : null}
        </View>
        {actionIcon ? (
          <TouchableOpacity onPress={onAction} style={styles.iconButton}>
            <MaterialCommunityIcons name={actionIcon} size={24} color={theme.colors.onSurface} />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 44,
    height: 44,
  },
  textGroup: {
    flex: 1,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default ScreenHeader;
