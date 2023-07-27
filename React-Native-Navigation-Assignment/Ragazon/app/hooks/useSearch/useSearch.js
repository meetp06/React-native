import { useState } from 'react';

/*
 * Hook for storing the searched value in search box.
 *
 * @return - searchInput and its updater function.
 */

const useSearch = () => {
    const [searchInput, setSearchInput] = useState('');

    return [searchInput, setSearchInput];
};

export default useSearch;
