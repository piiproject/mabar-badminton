import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

type CountdownTimerProps = {
  seconds: number;
};

const formatTime = (value: number) => String(value).padStart(2, '0');

const CountdownTimer: React.FC<CountdownTimerProps> = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const theme = useTheme();

  useEffect(() => {
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}> 
      <Text style={[styles.label, { color: theme.colors.onSurface }]}>Countdown</Text>
      <Text style={[styles.time, { color: theme.colors.primary }]}>
        {formatTime(minutes)}:{formatTime(secs)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  label: {
    fontSize: 12,
    marginBottom: 6,
    fontWeight: '600',
  },
  time: {
    fontSize: 28,
    fontWeight: '700',
  },
});

export default CountdownTimer;
