import { Handshake, PencilSimpleLine, Phone } from 'phosphor-react-native';
import React from 'react';
import { Image, ImageBackground, Linking, Text, TouchableOpacity, View } from 'react-native';
import DefaultImage from '../../../assets/images';
import { Strings } from '../../../constants';
import { moderateScale } from '../../../theme';
import Color from '../../../theme/Colors';
import styles from './UserProfileStyles';

const phoneLinking = async () => {
  await Linking.openURL(`tel:${8778 - 6532}`);
};
const mailLinking = async () => {
  await Linking.openURL('mailto:afraizamiral@gmail.com');
};

const UserProfile = () => {
  return (
    <View style={styles.mainRoot}>
      <View style={styles.root}>
        <ImageBackground
          blurRadius={8}
          source={DefaultImage.UserProfileBG}
          resizeMode="cover"
          style={styles.bgImage}
        >
          <Image source={DefaultImage.Humood} style={styles.defaultUser} />
        </ImageBackground>
        <TouchableOpacity style={styles.editIconContainer}>
          <PencilSimpleLine size={moderateScale(28)} color={Color.Black} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.userNameView}>
          <Text style={styles.nameStyle}>Meet</Text>
          <Text style={styles.nameStyle}>Patel</Text>
        </View>
        <View style={styles.userNumberView}>
          <Phone size={moderateScale(28)} weight="bold" style={styles.icon} />
          <TouchableOpacity onPress={() => phoneLinking()}>
            <Text style={styles.nameStyle}>8778-6532</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoStyle}>{Strings.InsideAppStrings.UserInformation}</Text>
          <View style={styles.supportText}>
            <Text style={styles.supportTextStyle}>* For your support buy me a Coffee.</Text>
          </View>
          <View style={styles.userEmail}>
            <Handshake size={moderateScale(29)} weight="bold" color={Color.BlueC} />
            <TouchableOpacity onPress={() => mailLinking()}>
              <Text style={styles.userEmailText}>afraizamirAL@rasidh.com</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
