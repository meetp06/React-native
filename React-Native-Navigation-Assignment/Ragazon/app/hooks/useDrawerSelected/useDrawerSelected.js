import { useState } from 'react';
import { ROUTES } from '../../constants';

/*
 * Hook for storing the selected drawer tab.
 *
 * @return - drawerSelected and its updater function.
 */

const useDrawerSelected = () => {
    const [drawerSelected, setDrawerSelected] = useState(ROUTES.HomeTab);
    return [drawerSelected, setDrawerSelected];
};

export default useDrawerSelected;
