import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from './CategoryStyles';
import { useContext } from 'react';
import { CategoryContext } from '../../../../contexts';

/*
 * Individual category box.
 *
 * @return - container of category item.
 */

const CategoryItem = ({ categoryName }) => {
    const { selectedCategory, setCategory } = useContext(CategoryContext);
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
                <Text
                    style={[
                        styles.itemText,
                        isSelected && styles.selectedItemText,
                    ]}>
                    {categoryName}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CategoryItem;
