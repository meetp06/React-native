import { MagnifyingGlass, XCircle } from 'phosphor-react-native';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton, CustomTextInput } from '../../components';
import { getAllCatPending } from '../../redux';
import { setSearchEnabled, setSearchText } from '../../redux/search';
import { handleDebounce } from '../../redux/search/SearchSlice';
import { COLORS, moderateScale } from '../../theme';
import applicationStyles from '../../theme/ApplicationStyles';
import { BreedList } from './breeds';
import { CatList } from './cats';

const HomeScreen = () => {
  const reduxDispatch = useDispatch();
  const [selectedBreed, setSelectedBreed] = useState(() => 'All');
  const isSearchEnabled = useSelector((state) => state.search.isSearchEnabled);

  const searchedText = useSelector((state) => state.search.searchText);

  const handleClear = () => {
    reduxDispatch(setSearchText(''));
  };

  const handleClose = () => {
    reduxDispatch(setSearchEnabled());
    reduxDispatch(getAllCatPending());
  };

  return (
    <View style={applicationStyles.screen}>
      <View>
        {isSearchEnabled ? (
          <CustomTextInput
            autoFocus={true}
            autoCorrect={false}
            onChangeText={(prev) => reduxDispatch(handleDebounce(prev))}
            placeholder='Search..'
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
        ) : null}
        {!isSearchEnabled ? (
          <CustomButton
            title={'Search'}
            onPress={handleClose}
          />
        ) : null}
      </View>
      <View style={applicationStyles.screenGrow}>
        <BreedList
          selectedCategory={selectedBreed}
          setCategory={setSelectedBreed}
        />
        <CatList selectedCategory={selectedBreed} />
      </View>
    </View>
  );
};

export default HomeScreen;
