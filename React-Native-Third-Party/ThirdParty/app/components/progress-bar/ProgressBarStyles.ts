import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    width: '100%',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: COLORS.white,
  },
  progressBar: {
    width: '75%',
    height: 10,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.PrimaryColor,
  },
  currentTime: {
    position: 'absolute',
    left: 0,
    fontSize: 12,
    color: COLORS.white,
  },
  totalDuration: {
    position: 'absolute',
    right: 0,
    fontSize: 12,
    color: COLORS.white,
  },
});

export default styles;
