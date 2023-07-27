import { useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { CustomButton } from '../../components';
import { applicationStyles } from '../../theme';
import { permissionHandler } from '../../utils';
import styles from './HomeScreenStyles';

const HomeScreenWithImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState([]);

  const onCameraPress = async () => {
    try {
      await permissionHandler('WRITE_EXTERNAL_STORAGE');
      await permissionHandler('CAMERA');

      const result = await launchCamera({
        mediaType: 'mixed',
        maxHeight: 200,
        maxWidth: 200,
        saveToPhotos: true,
      });

      if (result.didCancel) {
        console.log('User cancelled image picker');
      } else if (result.errorMessage) {
        console.log('Image picker error: ', result.errorMessage);
      } else if (result.errorCode) {
        console.log('Image picker error: ', result.errorCode);
      } else {
        setSelectedImage((prev) => [...prev, result?.assets[0].uri]);
      }
    } catch (error) {
      console.log('====================================');
      console.log(`error is ${error}`);
      console.log('====================================');
    }
  };

  const handleImagePicker = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 2,
      });

      if (result.didCancel) {
        console.log('User cancelled image picker');
      } else if (result.errorMessage) {
        console.log('Image picker error: ', result.errorMessage);
      } else {
        setSelectedImage((prev) => [
          ...prev,
          ...result.assets?.map((value) => value.uri),
        ]);
      }
    } catch (error) {
      console.log('====================================');
      console.log(`error is ${error}`);
      console.log('====================================');
    }
  };

  return (
    <View style={applicationStyles.screen}>
      {selectedImage.length > 0 ? (
        <FlatList
          horizontal
          data={selectedImage}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.padding}>
              <Image
                source={{ uri: item }}
                style={{ width: 200, height: 200 }}
              />
            </View>
          )}
        />
      ) : null}
      <CustomButton
        title={'Launch Camera'}
        onPress={onCameraPress}
      />
      <CustomButton
        title={'Pick the image'}
        onPress={handleImagePicker}
      />
    </View>
  );
};

export default HomeScreenWithImagePicker;
