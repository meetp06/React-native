import { Plus } from 'phosphor-react-native';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import DefaultImage from '../../../assets/images';
import { Strings } from '../../../constants';
import { moderateScale } from '../../../theme';
import ApplicationStyle from '../../../theme/ApplicationStyle';
import Color from '../../../theme/Colors';
import styles from './AddUserStyles';

const AddUser = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const addUser = () => {
    //* new user releted things here
  };

  // const askPermission = (permission: any) => {
  //   request(permission).then((result) => {
  //     console.log(result);
  //   });
  // };

  // const userPermission = () => {
  //   {
  //     if (Platform.OS == 'ios') {
  //       askPermission(PERMISSIONS.IOS.PHOTO_LIBRARY);
  //       askPermission(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY);
  //     } else {
  //       askPermission(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
  //       askPermission(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
  //     }
  //   }
  // };

  const ImagePicker = () => {
    // if (Platform.OS == 'ios') {
    //   askPermission(PERMISSIONS.IOS.PHOTO_LIBRARY);
    //   askPermission(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY);
    let options = {
      storageOption: {
        path: 'image'
      }
    };

    launchImageLibrary(options, (response) => {
      return setImage(response.assets[0].uri);
    });
    // } else {
    //   askPermission(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    //   askPermission(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    // }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={ApplicationStyle.screen} behavior="height">
        <View style={styles.container}>
          <ImageBackground
            source={DefaultImage.UserBackground}
            resizeMode="contain"
            style={styles.backgroundImage}
          >
            <Text style={styles.headerText}>{Strings.InsideAppStrings.AppName}</Text>
          </ImageBackground>
          <View style={styles.userImage}>
            <Image
              source={{
                uri: image
              }}
              style={styles.centerImage}
            />
            <TouchableOpacity onPress={() => ImagePicker()}>
              <Plus size={moderateScale(20)} color={Color.BlueC} weight="bold" />
            </TouchableOpacity>
          </View>
          <View style={styles.inputFiled}>
            <TextInput
              style={styles.input}
              placeholder={Strings.InsideAppStrings.FirstName}
              placeholderTextColor={Color.Black}
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder={Strings.InsideAppStrings.LastName}
              placeholderTextColor={Color.Black}
              value={lastName}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.input}
              placeholder={Strings.InsideAppStrings.Email}
              placeholderTextColor={Color.Black}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder={Strings.InsideAppStrings.Password}
              placeholderTextColor={Color.Black}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.addButton} onPress={addUser}>
            <Text style={styles.footerText}>{Strings.InsideAppStrings.AddUser}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AddUser;
