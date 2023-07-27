import {Text, TouchableOpacity, View} from 'react-native';
import styles from './CategoryListStyles';

// create a component
const CategoryList = ({name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameView}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//make this component available to the app
export default CategoryList;
