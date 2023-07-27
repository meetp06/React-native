import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserDetailsContext, SearchContext } from '../../contexts';
import { HomeScreen } from '../../modules';
import { useSearch } from '../../hooks';
import { ProductInfo } from '../../modules/home/product-info';
import { ROUTES } from '../../constants';
import { COLORS, applicationStyles, moderateScale } from '../../theme';
import { HomeScreenHeader, NormalHeader } from '../../components';
import { ArrowFatLeft } from 'phosphor-react-native';
import { navigateBack } from '../../utils';

/*
 * Home Stack Navigation.
 *
 * @return - Home stack component
 */

const Stack = createStackNavigator();

const HomeStack = () => {
    const { userDetails } = useContext(UserDetailsContext);
    const [searchInput, setSearchInput] = useSearch();

    return (
        <SearchContext.Provider value={{ searchInput, setSearchInput }}>
            <Stack.Navigator
                screenOptions={{
                    headerBackTitleStyle: applicationStyles.screenTitleStyle,
                    headerTitleStyle: applicationStyles.screenTitleStyle,
                }}>
                <Stack.Screen
                    options={{
                        header: () => (
                            <HomeScreenHeader
                                title={`Welcome ${
                                    userDetails?.fName ?? 'Guest'
                                }`}
                            />
                        ),
                    }}
                    name={ROUTES.Home}
                    component={HomeScreen}
                />
                <Stack.Screen
                    options={{
                        header: () => (
                            <NormalHeader
                                title={'Product Details'}
                                leftComponent={
                                    <ArrowFatLeft
                                        size={moderateScale(24)}
                                        weight='fill'
                                        color={COLORS.PrimaryColor}
                                    />
                                }
                                leftComponentOnPress={() => {
                                    navigateBack();
                                }}
                            />
                        ),
                    }}
                    name={ROUTES.ProductInfo}
                    component={ProductInfo}
                />
            </Stack.Navigator>
        </SearchContext.Provider>
    );
};

export default HomeStack;
