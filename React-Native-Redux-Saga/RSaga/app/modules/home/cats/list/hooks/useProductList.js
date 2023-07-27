import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCatPending, getCatPending } from '../../../../../redux';

/*
 * Hook for managing the product list screen.
 *
 * @param {selectedCategory} - current selected category.
 * @return - objects having loading, data, productData, isSearchEnabled.
 */

const useProductList = (selectedCategory) => {
  const loading = useSelector((state) => state.cat.cat.loadingStatus);
  const breedList = useSelector((state) => state.cat.breed.list);
  const data = useSelector((state) => state.cat.cat.list);
  const page = useSelector((state) => state.cat.pagination.page);
  const isEndReached = useSelector(
    (state) => state.cat.pagination.isEndReached
  );
  const isPageLoading = useSelector(
    (state) => state.cat.pagination.loadingStatus
  );
  const reduxDispatch = useDispatch();

  const callApi = () => {
    if (selectedCategory !== 'All') {
      const id =
        breedList.find((item) => item.name === selectedCategory)?.id ?? 'abys';

      reduxDispatch(getCatPending(id));
    } else {
      if (!isEndReached) reduxDispatch(getAllCatPending(page));
    }
  };

  useEffect(() => {
    callApi();
  }, [selectedCategory]);

  const handleRetry = () => {
    callApi();
  };

  return { loading, data, handleRetry, isPageLoading, isEndReached };
};

export default useProductList;
