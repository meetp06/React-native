import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatBreedPending } from '../../../../redux';

/*
 * Hook for managing the category screen.
 *
 * @param none.
 * @return - objects having loading, categoryList.
 */

const useCategory = () => {
  const categoryList = useSelector((state) => state.cat.breed.list);
  const loading = useSelector((state) => state.cat.breed.loadingStatus);
  const reduxDispatch = useDispatch();

  useEffect(() => {
    reduxDispatch(getCatBreedPending());
  }, []);

  return { loading, categoryList };
};

export default useCategory;
