import {StyleSheet} from 'react-native';

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
  },
  textInput: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: '70%',
  },
  placeholder: {
    marginLeft: 10,
  },
  body: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  add: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  todoList: {
    marginTop: 15,
  },
  clearList: {
    marginTop: 20,
  },
});

export default styles;
