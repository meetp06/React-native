import { Text, TouchableOpacity, View } from 'react-native';
import styles from './CategoryListStyles';

// create a component
const CategoryList = ({ name }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => tapableProduct()}>
        <View style={styles.nameView}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default CategoryList;
