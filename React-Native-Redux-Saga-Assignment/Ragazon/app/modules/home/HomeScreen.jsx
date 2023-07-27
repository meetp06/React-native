import { MagnifyingGlass, XCircle } from 'phosphor-react-native';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton, CustomTextInput } from '../../components';
import { STRINGS } from '../../constants';
import { setSearchText } from '../../redux';
import { COLORS, applicationStyles, moderateScale } from '../../theme';
import styles from './HomeScreenStyles';
import { CategoryList } from './category';
import { useHomeScreen } from './hooks';
import { ProductList } from './products';

/*
 * Home Screen.
 *
 * @return - home screen component
 */

const HomeScreen = () => {
  const {
    isSearchEnabled,
    reduxDispatch,
    searchedText,
    handleClear,
    handleClose,
    selectedCategory,
    setCategory,
  } = useHomeScreen();

  return (
    <View style={styles.rootView}>
      <ScrollView contentContainerStyle={applicationStyles.screenGrow}>
        {isSearchEnabled && (
          <CustomTextInput
            autoFocus={true}
            autoCorrect={false}
            value={searchedText.trim()}
            onChangeText={(prev) => reduxDispatch(setSearchText(prev))}
            placeholder={STRINGS.Placeholders.search}
            leadingIconSrc={
              <MagnifyingGlass
                size={moderateScale(26)}
                color={COLORS.PrimaryColor}
                weight='regular'
              />
            }
            suffixIconSrc={
              searchedText ? (
                <TouchableOpacity onPress={handleClear}>
                  <XCircle
                    size={moderateScale(26)}
                    color={COLORS.PrimaryColor}
                    weight='light'
                  />
                </TouchableOpacity>
              ) : (
                <CustomButton
                  title='Close'
                  onPress={handleClose}
                />
              )
            }
          />
        )}
        <View style={styles.stickyView}>
          <Text style={styles.category}>Categories</Text>
          <CategoryList
            selectedCategory={selectedCategory}
            setCategory={setCategory}
          />
        </View>
        <ProductList selectedCategory={selectedCategory} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
