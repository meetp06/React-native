import {FlatList, StyleSheet, Text, View} from 'react-native';
import globalArray from '../static/globalArray';
import Story from './story';
import {useContext} from 'react';
import DimensionConstant from '../../contexts';

//* Top app header

const AppHeader = () => {
  console.log('====================================');
  console.log('called');
  console.log('====================================');

  const {verticalScale, horizontalScale, moderateScale} = useContext(
    DimensionConstant,
  ) as any;

  return (
    <View
      style={[
        styles.upperSection,
        {
          paddingTop: verticalScale(5),
          paddingBottom: verticalScale(5),
        },
      ]}>
      {/* //* App title */}
      <Text style={[styles.titleBar, {fontSize: moderateScale(24)}]}>
        {' '}
        PhotoBay{' '}
      </Text>

      {/* //* Story */}
      <FlatList
        data={globalArray}
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          {
            /* //* Each Solo Story */
          }
          return <Story name={item.name} src={item.src} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  upperSection: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },

  titleBar: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'black',
  },
});

export default AppHeader;
