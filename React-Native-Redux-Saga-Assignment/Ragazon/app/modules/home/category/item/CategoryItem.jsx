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
  const categoryStyle = styles(isSelected);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setCategory(() => categoryName)}
        style={categoryStyle.itemContainerStyle}
        activeOpacity={0.7}>
        <Text style={categoryStyle.itemTextStyle}>{categoryName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
