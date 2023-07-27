/*
 * Function to filter the products.
 *
 * @param {selectedCategory} - category which is selected.
 * @param {searchPrompt} - text on which the filtering is done.
 * @return - filtered product list.
 */

import { PRODUCTS } from '../../constants';

const filterProducts = (selectedCategory, searchPrompt) => {
    return PRODUCTS.filter((product) => {
        if (
            selectedCategory === 'All' ||
            product.category === selectedCategory
        ) {
            if (searchPrompt) {
                return product.title
                    .toLowerCase()
                    .includes(searchPrompt.toLowerCase());
            } else {
                return true;
            }
        } else return false;
    });
};

export default filterProducts;
