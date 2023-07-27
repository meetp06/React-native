import { FlatList, View } from 'react-native';
import { CATEGORY } from '../../../../constants';
import CategoryItem from '../item/CategoryItem';

/*
 * List of the category in horizontal fashion.
 *
 * @return - list of category.
 */

const CategoryList = () => {
    return (
        <View>
            <FlatList
                data={CATEGORY}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <CategoryItem categoryName={item} />}
            />
        </View>
    );
};

export default CategoryList;
