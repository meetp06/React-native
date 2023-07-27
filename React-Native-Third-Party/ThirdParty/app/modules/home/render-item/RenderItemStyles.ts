import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme';

const styles = StyleSheet.create({
  videoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  thumbnail: {
    width: 80,
    height: 60,
    marginRight: 10,
  },
  videoInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
  },
});

export default styles;
