import { FlatList, Text, View } from 'react-native';
import { LoadingIndicator } from '../../../../components';
import { STRINGS } from '../../../../constants';
import { useCategory } from '../hooks';
import { CategoryItem } from '../item';
import styles from './CategoryStyles';

/*
 * List of the category in horizontal fashion.
 *
 * @param {selectedCategory} - current selected category.
 * @param {setCategory} - function to update the category.
 * @return - list of category.
 */

const CategoryList = ({ selectedCategory, setCategory }) => {
  const { loading, categoryList } = useCategory();

  switch (loading) {
    case STRINGS.pending:
    case STRINGS.idle:
      return <LoadingIndicator textInfo={undefined} />;

    case STRINGS.success:
      return (
        <View style={styles.root}>
          <Text style={styles.text}>Breeds:</Text>
          <FlatList
            data={categoryList}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <CategoryItem
                categoryName={item.name}
                selectedCategory={selectedCategory}
                setCategory={setCategory}
              />
            )}
          />
        </View>
      );

    default:
      break;
  }
};

export default CategoryList;
