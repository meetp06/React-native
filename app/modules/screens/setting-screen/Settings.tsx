import { Note, PaintRoller, Password, Tag } from 'phosphor-react-native';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DefaultImage from '../../../assets/images';
import { RouteNames } from '../../../constants';
import PasswordModal from '../../../modal/chang-password/PasswordModal';
import { moderateScale } from '../../../theme';
import Color from '../../../theme/Colors';
import { navigateWithParam, navigateWithReplace } from '../../../utils';
import styles from './SettingsStyles';

const Settings = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  type PasswordProps = {
    currentPassword: string;
    newPassword: string;
  };

  const handleSavePassword = ({
    currentPassword,
    newPassword,
  }: PasswordProps) => {
    // Handle saving the password logic here
    handleCloseModal();
  };

  const gotoLoginPage = () =>
    Alert.alert('Logout', 'Are you sure to want to logout!!', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => navigateWithReplace(RouteNames.Login),
        style: 'destructive',
      },
    ]);

  const gotoTermsPage = () => {
    navigateWithParam(RouteNames.TandC);
  };
  const gotoPolicyPage = () => {
    navigateWithParam(RouteNames.Policy);
  };

  return (
    <View style={styles.root}>
      <View style={styles.headerView}>
        <Image source={DefaultImage.Logo} style={styles.image} />
        <View style={styles.headerText}>
          <View style={styles.headerNameView}>
            <Text style={styles.userName}>Meet Patel</Text>
          </View>
          <View style={styles.headerNameView}>
            <Text style={styles.userEmail}>abc@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.fieldView}>
          <Password
            size={moderateScale(26)}
            weight="bold"
            style={styles.icon}
          />
          <TouchableOpacity onPress={handleOpenModal} style={styles.textView}>
            <Text style={styles.text}>Change Password</Text>
          </TouchableOpacity>
          <PasswordModal
            visible={modalVisible}
            onCancel={handleCloseModal}
            onSave={handleSavePassword}
          />
        </View>
        <View style={styles.fieldView}>
          <PaintRoller
            size={moderateScale(26)}
            weight="bold"
            style={styles.icon}
          />
          <TouchableOpacity onPress={() => {}} style={styles.textView}>
            <Text style={styles.text}>Change Theme</Text>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: Color.EmailColor, true: Color.BlueB }}
            thumbColor={isEnabled ? Color.BlueC : Color.White}
            ios_backgroundColor={Color.EmailColor}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.toggle}
          />
        </View>
        <View style={styles.fieldView}>
          <Note size={moderateScale(26)} weight="bold" style={styles.icon} />
          <TouchableOpacity
            style={styles.textView}
            onPress={() => gotoTermsPage()}>
            <Text style={styles.text}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fieldView}>
          <Tag size={moderateScale(26)} weight="bold" style={styles.icon} />
          <TouchableOpacity
            style={styles.textView}
            onPress={() => gotoPolicyPage()}>
            <Text style={styles.text}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => gotoLoginPage()}>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
