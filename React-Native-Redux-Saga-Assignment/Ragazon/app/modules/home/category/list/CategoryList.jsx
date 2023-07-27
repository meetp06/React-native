import { FlatList } from 'react-native';
import { LoadingIndicator } from '../../../../components';
import { STRINGS } from '../../../../constants';
import { useCategory } from '../hooks';
import { CategoryItem } from '../item';

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
      );

    default:
      break;
  }
};

export default CategoryList;
