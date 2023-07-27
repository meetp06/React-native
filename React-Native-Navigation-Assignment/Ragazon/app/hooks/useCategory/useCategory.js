import { useState } from 'react';

/*
 * Hook for storing the selected category.
 *
 * @return - category and its updater function.
 */

const useCategory = () => {
    const [selectedCategory, setCategory] = useState('All');

    return [selectedCategory, setCategory];
};

export default useCategory;
