import { Envelope, Password } from 'phosphor-react-native';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Images } from '../../../assets';
import {
  CustomButton,
  CustomTextInput,
  LoadingIndicator,
} from '../../../components';
import { STRINGS } from '../../../constants';
import { COLORS, applicationStyles, moderateScale } from '../../../theme';
import styles from './LoginScreenStyles';
import { useLogin } from './hook';

/*
 * Login screen.
 *
 * @return - login screen.
 */

const LoginScreen = () => {
  const { loadingStatus, formik, register } = useLogin();
  const isEmailOk = formik.touched.email && formik.errors.email;
  const isPasswordOk = formik.touched.password && formik.errors.password;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={applicationStyles.screen}
        behavior='height'>
        <ImageBackground
          source={Images.loginBackground}
          style={styles.backgroundImage}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}>
            <View style={styles.loginContainer}>
              <View style={styles.loginTextContainer}>
                <Text style={styles.loginTextStyle}>Login</Text>
              </View>
              <View style={styles.formContainer}>
                <CustomTextInput
                  value={formik.values.email}
                  autoCorrect={false}
                  keyboardType='email-address'
                  leadingIconSrc={
                    <Envelope
                      size={moderateScale(30)}
                      color={COLORS.PrimaryColor}
                      weight='duotone'
                    />
                  }
                  placeholder={STRINGS.Placeholders.enterEmail}
                  onBlur={formik.handleBlur('email')}
                  onChangeText={formik.handleChange('email')}
                />

                {isEmailOk && (
                  <Text
                    style={
                      applicationStyles.errorTextStyle
                    }>{`${formik.errors.email}`}</Text>
                )}

                <CustomTextInput
                  leadingIconSrc={
                    <Password
                      size={moderateScale(30)}
                      color={COLORS.PrimaryColor}
                      weight='duotone'
                    />
                  }
                  defaultValue=''
                  autoCorrect={false}
                  secureTextEntry={true}
                  value={formik.values.password}
                  placeholder={STRINGS.Placeholders.enterPassword}
                  onBlur={formik.handleBlur('password')}
                  onChangeText={formik.handleChange('password')}
                />

                {isPasswordOk && (
                  <Text
                    style={
                      applicationStyles.errorTextStyle
                    }>{`${formik.errors.password}`}</Text>
                )}

                {loadingStatus === STRINGS.pending ? (
                  <LoadingIndicator />
                ) : (
                  <CustomButton
                    title={'Login'}
                    onPress={formik.handleSubmit}
                  />
                )}
              </View>
            </View>
            <View style={styles.registerContainer}>
              <View style={styles.divider} />
              <View style={styles.formContainer}>
                <Text style={styles.newContainer}>{STRINGS.newToApp}</Text>
                <CustomButton
                  title={STRINGS.buttonTitles.createYourAccount}
                  onPress={register}
                />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
