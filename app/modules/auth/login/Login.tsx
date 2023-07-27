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
import { Strings } from '../../../constants';
import RouteNames from '../../../constants/RouteStrings';
import OpenUrl from '../../../services/auth-linking/SignIn';
import ApplicationStyle from '../../../theme/ApplicationStyle';
import Color from '../../../theme/Colors';
import { navigateWithReplace } from '../../../utils';
import styles from './LoginStyles';
import useLogin from './hook/UserLogin';

const LoginScreen = () => {
  const googleUrl = 'https://google.com';
  const facebookUrl = 'https://facebook.com';
  const appleUrl = 'https://apple.com';

  const { formik } = useLogin();

  const gotoSignUp = () => {
    navigateWithReplace(RouteNames.SignUp);
  };

  const gotoHomepage = () => {
    navigateWithReplace(RouteNames.RootPage);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={ApplicationStyle.screen} behavior="height">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flex: 1,
            backgroundColor: Color.BackgroundColor,
          }}>
          <View style={styles.container}>
            <Image source={DefaultImage.Logo} style={styles.logo} />
            <Text style={styles.appName}>
              {Strings.InsideAppStrings.AppName}
            </Text>
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
              onPress={() => gotoHomepage()}>
              <Text style={styles.buttonText}>
                {Strings.InsideAppStrings.Login}
              </Text>
            </TouchableOpacity>
            <View style={styles.footerText}>
              <Text style={styles.accountText}>
                {Strings.InsideAppStrings.LoFoText}
              </Text>
              <TouchableOpacity onPress={() => gotoSignUp()}>
                <Text style={styles.signupText}>
                  {Strings.InsideAppStrings.Signup}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
