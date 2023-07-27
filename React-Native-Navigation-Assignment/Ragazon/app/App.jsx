import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CategoryContext, DrawerContext, UserDetailsContext } from './contexts';
import { CartContext } from './contexts';
import { useApp } from './hooks';
import { RootStack } from './navigations';
import { SplashScreen } from './components';
import { applicationStyles } from './theme';
import { navigationRef } from './utils';

/*
 * Main app component which is our starting point
 * consisting of context providers and navigation ref
 *
 * @return - App component
 */

const App = () => {
    const {
        isLoading,
        userDetails,
        setUserDetails,
        cartList,
        setCartList,
        drawerSelected,
        setDrawerSelected,
        selectedCategory,
        setCategory,
    } = useApp();

    return (
        <SafeAreaView style={applicationStyles.screen}>
            <NavigationContainer ref={navigationRef}>
                <UserDetailsContext.Provider
                    value={{ userDetails, setUserDetails }}>
                    <CartContext.Provider value={{ cartList, setCartList }}>
                        <DrawerContext.Provider
                            value={{ drawerSelected, setDrawerSelected }}>
                            <CategoryContext.Provider
                                value={{ setCategory, selectedCategory }}>
                                {isLoading ? <SplashScreen /> : <RootStack />}
                            </CategoryContext.Provider>
                        </DrawerContext.Provider>
                    </CartContext.Provider>
                </UserDetailsContext.Provider>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
