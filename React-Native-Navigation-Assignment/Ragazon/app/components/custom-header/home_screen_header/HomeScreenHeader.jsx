import { ArrowLeft, List, MagnifyingGlass } from 'phosphor-react-native';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import style from './HomeScreenHeaderStyle';
import { COLORS, moderateScale } from '../../../theme';
import { useHomeScreenHeader } from './hooks';

/*
 * Home screen Header consisting of search icon
 * and drawer icon.
 *
 * @param {title} - title of the header
 * @return - home screen header.
 */

const HomeScreenHeader = ({ title }) => {
    const {
        showSearch,
        handleSearch,
        handleBack,
        openDrawer,
        searchInput,
        setSearchInput,
    } = useHomeScreenHeader();

    return (
        <View style={style.rootView}>
            {showSearch ? (
                <>
                    <TouchableOpacity onPress={handleBack}>
                        <ArrowLeft
                            size={moderateScale(24)}
                            color={COLORS.PrimaryColor}
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Search'
                        style={style.searchContainer}
                        autoCorrect={false}
                        autoFocus={true}
                        value={searchInput}
                        onChangeText={(cur) => setSearchInput(() => cur)}
                    />
                </>
            ) : (
                <View style={style.homeContainer}>
                    <TouchableOpacity onPress={openDrawer}>
                        <List
                            size={moderateScale(24)}
                            weight='bold'
                            color={COLORS.PrimaryColor}
                        />
                    </TouchableOpacity>
                    <Text style={style.titleStyle}>{title}</Text>
                    <TouchableOpacity onPress={handleSearch}>
                        <MagnifyingGlass
                            size={moderateScale(24)}
                            color={COLORS.PrimaryColor}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default HomeScreenHeader;
