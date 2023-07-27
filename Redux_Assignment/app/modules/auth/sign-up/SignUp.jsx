import {CommonActions, useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import images from '../../../assets/images';
import {Regex} from '../../../constants';
import {YupStrings} from '../../../utils';
import styles from './SignUpStyles';

// create a component
const SignUp = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(YupStrings.FieldError.email)
      .matches(Regex.Email, 'Email is not valid')
      .email(),
    password: Yup.string()
      .required(YupStrings.FieldError.password)
      .max(15, YupStrings.MaxCharError.password)
      .min(8, YupStrings.MinCharError.password)
      .matches(Regex.PassWord, `Atleast add one Symbol Number Captital char`),
    username: Yup.string()
      .required(YupStrings.FieldError.username)
      .min(2, YupStrings.MinCharError.username)
      .max(25, YupStrings.MaxCharError.username),
    confirmPassword: Yup.string().required(
      YupStrings.FieldError.confirmPassword,
    ),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
    },
    onSubmit() {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
      navigation.dispatch(resetAction);
    },
    validationSchema: validationSchema,
  });

  const navigation = useNavigation();

  const gotoLoginPage = () => {
    navigation.replace('Log In');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.body}>
            <View>
              <Image style={styles.image} source={images.SignUp} />
            </View>
            <Text style={styles.headerText}>Get on Board</Text>
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor={'#a1aadd'}
                placeholder="Name"
                value={formik.values.username}
                onChangeText={formik.handleChange('username')}
                onBlur={formik.handleBlur('username')}
              />
              {formik.errors.username && formik.touched.username ? (
                <Text style={styles.errorText}>{formik.errors.username}</Text>
              ) : null}
              <TextInput
                style={styles.textInput}
                placeholderTextColor={'#a1aadd'}
                placeholder="E-mail"
                autoCapitalize="none"
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
              />
              {formik.errors.email && formik.touched.email ? (
                <Text style={styles.errorText}>{formik.errors.email}</Text>
              ) : null}
              <TextInput
                style={styles.textInput}
                placeholderTextColor={'#a1aadd'}
                placeholder="Enter Password"
                autoCapitalize="none"
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
              />
              {formik.errors.password && formik.touched.password ? (
                <Text style={styles.errorText}>{formik.errors.password}</Text>
              ) : null}
              <TextInput
                style={styles.textInput}
                placeholderTextColor={'#a1aadd'}
                placeholder="Confirm Password"
                autoCapitalize="none"
                secureTextEntry={true}
                value={formik.values.confirmPassword}
                onChangeText={formik.handleChange('confirmPassword')}
                onBlur={formik.handleBlur('confirmPassword')}
              />
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <Text style={styles.errorText}>
                  {formik.errors.confirmPassword}
                </Text>
              ) : null}
            </View>

            <View style={styles.signupView}>
              <TouchableOpacity onPress={formik.handleSubmit}>
                <Text style={styles.signupText}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <Text>if you have a account </Text>
              <TouchableOpacity onPress={() => gotoLoginPage()}>
                <Text style={styles.signupLinkText}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default SignUp;
