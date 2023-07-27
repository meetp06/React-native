import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesPending } from '../../../../redux';

/*
 * Hook for managing the category screen.
 *
 * @return - objects having loading, categoryList.
 */

const useCategory = () => {
  const categoryList = useSelector((state) => state.product.category.list);
  const loading = useSelector((state) => state.product.category.loadingStatus);
  const reduxDispatch = useDispatch();

  useEffect(() => {
    reduxDispatch(getCategoriesPending());
  }, []);

  return { loading, categoryList };
};

export default useCategory;
