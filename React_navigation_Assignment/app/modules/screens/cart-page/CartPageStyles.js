import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
    justifyContent: 'space-between',
  },
  cartDetails: {
    fontSize: 20,
    padding: 10,
    fontWeight: '500',
  },
  bodyView: {
    flexDirection: 'row',
    opacity: 10,
    bottom: 0,
    height: 50,
    width: '100%',
    justifyContent: 'center',
  },
  totalText: {
    fontWeight: '400',
    fontSize: 20,
    padding: 10,
    alignSelf: 'center',
  },
  buyNowView: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    backgroundColor: '#eaebfb',
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: 'white',
    width: 150,
    marginRight: 15,
  },
  buyNowText: {
    fontSize: 20,
    padding: 8,
    textAlign: 'center',
  },
});

export default styles;
