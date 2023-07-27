import {CommonActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DefaultImage from '../../../assets/images';
import {Strings} from '../../../constants';
import RouteNames from '../../../constants/RouteStrings';
import {NavigationProps} from '../../../navigation/stack-navigation/Stack';
import OpenUrl from '../../../services/auth-linking/SignIn';
import ApplicationStyle from '../../../theme/ApplicationStyle';
import {navigateWithReplace} from '../../../utils';
import styles from './SignUpStyles';
import useRegister from './hook/UserRegister';

const SignUpPage = () => {
  const googleUrl = 'https://google.com';
  const facebookUrl = 'https://facebook.com';
  const appleUrl = 'https://apple.com';

  const {formik} = useRegister();

  const navigation = useNavigation<NavigationProps>();

  const gotoSignin = () => {
    navigateWithReplace(RouteNames.Login);
  };

  const gotoDashboard = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{name: RouteNames.RootPage}],
    });
    navigation.dispatch(resetAction);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={ApplicationStyle.screen} behavior="height">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.container}>
            <Image source={DefaultImage.Logo} style={styles.logo} />
            <Text style={styles.appName}>
              {Strings.InsideAppStrings.AppName}
            </Text>
            <View style={styles.input}>
              <TextInput
                style={styles.input}
                placeholder={Strings.InsideAppStrings.FirstName}
                value={formik.values.firstname}
                autoCorrect={false}
                keyboardType="default"
                onBlur={formik.handleBlur('firstname')}
                onChangeText={formik.handleChange('firstname')}
              />
            </View>
            {formik.touched.firstname && formik.errors.firstname ? (
              <Text style={styles.errorText}>{formik.errors.firstname}</Text>
            ) : null}

            <View style={styles.input}>
              <TextInput
                style={styles.input}
                placeholder={Strings.InsideAppStrings.LastName}
                value={formik.values.lastname}
                autoCorrect={false}
                keyboardType="default"
                onBlur={formik.handleBlur('lastname')}
                onChangeText={formik.handleChange('lastname')}
              />
            </View>
            {formik.touched.lastname && formik.errors.lastname ? (
              <Text style={styles.errorText}>{formik.errors.lastname}</Text>
            ) : null}
            <View style={styles.input}>
              <TextInput
                style={styles.input}
                placeholder={Strings.InsideAppStrings.Email}
                value={formik.values.email}
                keyboardType="email-address"
                onBlur={formik.handleBlur('email')}
                onChangeText={formik.handleChange('email')}
              />
            </View>
            {formik.touched.email && formik.errors.email ? (
              <Text style={styles.errorText}>{formik.errors.email}</Text>
            ) : null}
            <View style={styles.input}>
              <TextInput
                style={styles.input}
                placeholder={Strings.InsideAppStrings.Password}
                secureTextEntry
                value={formik.values.password}
                keyboardType="default"
                onBlur={formik.handleBlur('password')}
                onChangeText={formik.handleChange('password')}
              />
            </View>
            {formik.touched.password && formik.errors.password ? (
              <Text style={styles.errorText}>{formik.errors.password}</Text>
            ) : null}
            <Text style={styles.orText}>{Strings.InsideAppStrings.Or}</Text>
            <View style={styles.socialButtonsContainer}>
              <OpenUrl url={googleUrl} children={DefaultImage.GoogleIcon} />
              <OpenUrl url={appleUrl} children={DefaultImage.AppleIcon} />
              <OpenUrl url={facebookUrl} children={DefaultImage.facebookIcon} />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => gotoDashboard()}>
              <Text style={styles.buttonText}>
                {Strings.InsideAppStrings.Signup}
              </Text>
            </TouchableOpacity>
            <View style={styles.footerText}>
              <Text style={styles.accountText}>
                {Strings.InsideAppStrings.SiFoText}
              </Text>
              <TouchableOpacity onPress={() => gotoSignin()}>
                <Text style={styles.signupText}>
                  {Strings.InsideAppStrings.Login}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default SignUpPage;
