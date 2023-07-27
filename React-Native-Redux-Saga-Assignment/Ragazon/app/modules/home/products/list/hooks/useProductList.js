import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsPending } from '../../../../../redux';

/*
 * Hook for managing the product list screen.
 *
 * @param {selectedCategory} - current selected category.
 * @return - objects having loading, data, productData, isSearchEnabled.
 */

const useProductList = (selectedCategory) => {
  const loading = useSelector((state) => state.product.product.loadingStatus);
  const searchText = useSelector((state) => state.product.search.searchText);
  const categoryData = useSelector((state) => state.product.category.list);
  const productData = useSelector((state) => state.product.product.list);
  const isSearchEnabled = useSelector(
    (state) => state.product.search.isSearchEnabled
  );
  const [data, setData] = useState([]);
  const reduxDispatch = useDispatch();

  useEffect(() => {
    let suffixUrl = '';

    if (selectedCategory !== 'All') {
      const { id } = categoryData.find(
        (item) => item.name === selectedCategory
      );
      suffixUrl = `category_id=${id}`;
    }

    reduxDispatch(getProductsPending(suffixUrl));

    return () => {
      setData([]);
    };
  }, [selectedCategory]);

  useEffect(() => {
    const filteredArray = productData.filter((product) => {
      if (searchText) {
        return product.name
          .toLowerCase()
          .includes(searchText.trim().toLowerCase());
      } else {
        return product;
      }
    });

    setData([...filteredArray]);

    return () => {
      setData([]);
    };
  }, [searchText]);

  return { loading, data, productData, isSearchEnabled };
};

export default useProductList;
