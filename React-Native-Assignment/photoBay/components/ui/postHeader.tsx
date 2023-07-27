import {Image, StyleSheet, Text, View} from 'react-native';
import CircularImage from './circularImage';
import {useContext} from 'react';
import DimensionConstant from '../../contexts';

//* Top post header consisiting of user name, user image and user location

const PostHeader = ({image, name, location}: any) => {
  const {verticalScale, horizontalScale, moderateScale} = useContext(
    DimensionConstant,
  ) as any;

  return (
    //* Holding image name and location
    <View style={styles.imagePart}>
      {/*  //* Image */}
      <CircularImage
        src={image}
        style={{
          width: 50,
          height: 50,
          borderWidth: 0,
        }}
      />

      {/*  //* Name plus location in column */}
      <View>
        <Text style={[styles.name, {fontSize: moderateScale(16)}]}>
          {' '}
          {name}{' '}
        </Text>

        {/*  //* row for loaction Icon and location */}
        <View style={styles.locationBlock}>
          <Image
            style={styles.img}
            source={require('../../assets/icons/location.png')}
          />
          <Text style={[styles.location, {fontSize: moderateScale(16)}]}>
            {' '}
            {location}{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePart: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  locationBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 25,
  },

  location: {
    color: 'black',
    fontWeight: '300',
    fontSize: 15,
  },

  img: {
    height: 15,
    width: 15,
  },
});

export default PostHeader;
