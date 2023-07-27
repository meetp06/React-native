import { Text, TouchableOpacity, View } from 'react-native';
import styles from './CategoryStyles';

/*
 * Individual category box.
 *
 * @param {categoryName} - name of the category.
 * @param {selectedCategory} - selected category.
 * @param {setCategory} - function to update the category.
 * @return - container of category item.
 */

const CategoryItem = ({ categoryName, selectedCategory, setCategory }) => {
  const isSelected = selectedCategory === categoryName;

  return (
    <View>
      <TouchableOpacity
        onPress={() => setCategory(() => categoryName)}
        style={[
          styles.itemContainer,
          isSelected && styles.selectedItemContainer,
        ]}
        activeOpacity={0.7}>
        <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>
          {categoryName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
