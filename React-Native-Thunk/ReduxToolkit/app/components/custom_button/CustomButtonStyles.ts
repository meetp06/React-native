import { StyleSheet } from 'react-native';

const customButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: '#26b5dc',
    margin: 6,
    borderRadius: 10,
    elevation: 6,
  },

  innerText: {
    fontSize: 16,
    padding: 10,
    color: 'white',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.5,
  },
});

export default customButtonStyle;
