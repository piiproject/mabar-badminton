import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

type StatusType = 'Waiting' | 'Playing' | 'Finished' | 'Active' | 'Closed';

type StatusBadgeProps = {
  status: StatusType;
};

const statusMap: Record<StatusType, { label: string; color: string; backgroundColor: string }> = {
  Waiting: { label: 'Waiting', color: '#F59E0B', backgroundColor: 'rgba(245,158,11,0.12)' },
  Playing: { label: 'Playing', color: '#2563EB', backgroundColor: 'rgba(37,99,235,0.12)' },
  Finished: { label: 'Finished', color: '#64748B', backgroundColor: 'rgba(100,116,139,0.12)' },
  Active: { label: 'Active', color: '#16A34A', backgroundColor: 'rgba(22,163,74,0.12)' },
  Closed: { label: 'Closed', color: '#DC2626', backgroundColor: 'rgba(220,38,38,0.12)' },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const theme = useTheme();
  const style = statusMap[status];

  return (
    <View style={[styles.container, { backgroundColor: style.backgroundColor, borderColor: theme.colors.outline }]}> 
      <Text style={[styles.text, { color: style.color }]}>{style.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default StatusBadge;
