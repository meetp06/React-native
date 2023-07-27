import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    width: 200,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
});

export default styles;
