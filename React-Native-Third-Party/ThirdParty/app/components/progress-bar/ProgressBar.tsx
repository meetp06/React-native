import { Text, View } from 'react-native';
import styles from './ProgressBarStyles';

const ProgressIndicator = ({ currentTime, totalDuration }) => {
  const calculateProgress = () => {
    return (currentTime / totalDuration) * 100; // Calculate the progress percentage
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View
          style={[styles.progressFill, { width: `${calculateProgress()}%` }]}
        />
      </View>
      <Text style={styles.currentTime}>{formatTime(currentTime)}</Text>
      <Text style={styles.totalDuration}>{formatTime(totalDuration)}</Text>
    </View>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const formattedTime = `${padZero(minutes)}:${padZero(secs)}`;
  return formattedTime;
};

const padZero = (num) => {
  return num.toString().padStart(2, '0');
};

export default ProgressIndicator;
