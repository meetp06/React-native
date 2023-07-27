import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  HouseLine,
  ListPlus,
  MagnifyingGlass,
  ShoppingCartSimple,
  SignOut,
} from 'phosphor-react-native';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {OrderList, ProductList} from '../../components';
import {ROUTEKEY} from '../../constants';
import {moderateScale} from '../../themes';
import styles from './TabNavigationStyle';

const Tab = createBottomTabNavigator();
const TabNavigation = ({name}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: moderateScale(13),
        },
      }}>
      <Tab.Screen
        name={ROUTEKEY.PRODUCTLIST}
        component={ProductList}
        options={{
          headerShown: true,

          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <HouseLine size={moderateScale(25)} weight="bold" />
                ) : (
                  <HouseLine size={moderateScale(25)} weight="light" />
                )}
              </View>
            );
          },
          headerLeft: () => {
            const {categoryData} = useSelector(state => state.product);

            const handleSearch = text => {
              setSearchText(text);
              const filtered = categoryData.filter(product =>
                product.name.toLowerCase().includes(text.toLowerCase()),
              );
              setFilteredProducts(filtered);
            };

            return (
              <View style={styles.magnifyingGlassIcon}>
                <MagnifyingGlass
                  size={moderateScale(20)}
                  style={styles.search}
                  color="purple"
                />
                <TextInput
                  placeholder="Search anything"
                  style={styles.inputFiled}
                  value={searchText}
                  onChangeText={handleSearch}
                />
              </View>
            );
          },
          headerRight: () => {
            const navigation = useNavigation();
            const logout = () => {
              const resetAction = CommonActions.reset({
                index: 0,
                routes: [{name: 'Login'}],
              });
              navigation.dispatch(resetAction);
            };
            const gotoCart = () => {
              navigation.navigate(ROUTEKEY.CART);
            };
            const {newCartData} = useSelector(state => state.cart);
            return (
              <View style={styles.shoppingCartSimpleIcon}>
                <View style={styles.logout}>
                  <TouchableOpacity onPress={() => logout()}>
                    <SignOut size={moderateScale(25)} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={() => gotoCart()}>
                    <ShoppingCartSimple size={moderateScale(25)} />
                    <View style={styles.badgeView}>
                      <Text style={styles.badge}>
                        {newCartData.line_items?.length === 0
                          ? 0
                          : newCartData.line_items?.length}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          },

          headerTitle: '',
          tabBarLabel: 'Product List',
        }}
      />
      <Tab.Screen
        name={ROUTEKEY.ORDERLIST}
        component={OrderList}
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <ListPlus size={moderateScale(25)} weight="bold" />
                ) : (
                  <ListPlus size={moderateScale(25)} weight="light" />
                )}
              </View>
            );
          },
          tabBarLabel: 'Order List',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
