import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, toggleSearch } from '../../../redux';

/*
 * Hook for managing the home screen.
 *
 * @return - objects having  isSearchEnabled, reduxDispatch, searchedText,
 * handleClear, handleClose, selectedCategory, setCategory.
 */

const useHomeScreen = () => {
  const reduxDispatch = useDispatch();
  const isSearchEnabled = useSelector(
    (state) => state.product.search.isSearchEnabled
  );

  const searchedText = useSelector((state) => state.product.search.searchText);

  const handleClear = () => {
    reduxDispatch(setSearchText(''));
  };

  const handleClose = () => {
    reduxDispatch(toggleSearch());
  };

  const [selectedCategory, setCategory] = useState('All');

  return {
    isSearchEnabled,
    reduxDispatch,
    searchedText,
    handleClear,
    handleClose,
    selectedCategory,
    setCategory,
  };
};

export default useHomeScreen;
