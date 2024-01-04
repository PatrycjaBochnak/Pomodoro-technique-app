import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Timer: React.FC = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const target = new Date("11/11/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pomodoro app</Text>
      <Button title="Start timer" onPress={() => console.log('start timer')} />

      <View style={styles.timerInner}>
        <View style={styles.timerSegment}>
          <Text style={styles.time}>{days}</Text>
          <Text style={styles.label}>Days</Text>
        </View>
        <View style={styles.timerSegment}>
          <Text style={styles.time}>{hours}</Text>
          <Text style={styles.label}>Hours</Text>
        </View>
        <View style={styles.timerSegment}>
          <Text style={styles.time}>{minutes}</Text>
          <Text style={styles.label}>Minutes</Text>
        </View>
        <View style={styles.timerSegment}>
          <Text style={styles.time}>{seconds}</Text>
          <Text style={styles.label}>Seconds</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerInner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timerSegment: {
    alignItems: 'center',
  },
  time: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
  },
});

export default Timer;
