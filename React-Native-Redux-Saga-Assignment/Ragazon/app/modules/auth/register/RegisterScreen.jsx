import { Envelope, Password, User } from 'phosphor-react-native';
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
import styles from './RegisterScreenStyles';
import useRegister from './hook/useRegister';

/*
 * Register screen.
 *
 * @return - Register screen.
 */

const RegisterScreen = () => {
  const { loadingStatus, formik, login } = useRegister();
  const isNameOk = formik.touched.firstname && formik.errors.firstname;
  const isEmailOk = formik.touched.email && formik.errors.email;
  const isPasswordOk = formik.touched.password && formik.errors.password;
  const isConfirmPasswordOk =
    formik.touched.confirmPassword && formik.errors.confirmPassword;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={applicationStyles.screen}
        behavior='padding'>
        <ImageBackground
          source={Images.loginBackground}
          style={styles.backgroundImage}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}>
            <View style={styles.loginContainer}>
              <View style={styles.loginTextContainer}>
                <Text style={styles.loginTextStyle}>Register</Text>
              </View>
              <View style={styles.formContainer}>
                <CustomTextInput
                  value={formik.values.firstname}
                  autoCorrect={false}
                  keyboardType='default'
                  leadingIconSrc={
                    <User
                      size={moderateScale(30)}
                      color={COLORS.PrimaryColor}
                      weight='duotone'
                    />
                  }
                  placeholder={STRINGS.Placeholders.enterFirstName}
                  onBlur={formik.handleBlur('firstname')}
                  onChangeText={formik.handleChange('firstname')}
                />

                {isNameOk && (
                  <Text
                    style={
                      applicationStyles.errorTextStyle
                    }>{`${formik.errors.firstname}`}</Text>
                )}

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
                  value={formik.values.confirmPassword}
                  placeholder={STRINGS.Placeholders.confirmPassword}
                  onBlur={formik.handleBlur('confirmPassword')}
                  onChangeText={formik.handleChange('confirmPassword')}
                />
                {isConfirmPasswordOk && (
                  <Text
                    style={
                      applicationStyles.errorTextStyle
                    }>{`${formik.errors.confirmPassword}`}</Text>
                )}
                {loadingStatus === STRINGS.pending ? (
                  <LoadingIndicator />
                ) : (
                  <CustomButton
                    title={STRINGS.buttonTitles.register}
                    onPress={formik.handleSubmit}
                  />
                )}
              </View>
            </View>
            <View style={styles.registerContainer}>
              <View style={styles.divider} />
              <View style={styles.formContainer}>
                <Text style={styles.newContainer}>
                  {STRINGS.alreadyHaveAccount}
                </Text>
                <CustomButton
                  title={STRINGS.buttonTitles.loginWithAccount}
                  onPress={login}
                />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
