import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { SearchContext } from '../../../../contexts';

/*
 * Hook for Home screen header
 *
 * @return - hook for home screen header.
 */

const useHomeScreenHeader = () => {
    const { searchInput, setSearchInput } = useContext(SearchContext);
    const [showSearch, setShowSearch] = useState(false);
    const navigation = useNavigation();

    const handleSearch = () => {
        setShowSearch(true);
    };

    const handleBack = () => {
        setSearchInput(() => '');
        setShowSearch(false);
    };

    const openDrawer = () => {
        navigation.openDrawer();
    };

    return {
        showSearch,
        handleSearch,
        handleBack,
        openDrawer,
        searchInput,
        setSearchInput,
    };
};

export default useHomeScreenHeader;
