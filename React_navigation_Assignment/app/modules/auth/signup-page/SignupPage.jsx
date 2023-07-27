import {StackActions, useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import ValidateRegex from '../../../constants/ValidateRegex';
import {YupStrings} from '../../../utils';
import styles from './SignupPageStyle';

const SignupPage = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(YupStrings.FieldError.email)
      .matches(ValidateRegex.Email, 'Email is not valid')
      .email(),
    username: Yup.string()
      .required(YupStrings.FieldError.username)
      .min(2, YupStrings.MinCharError.username)
      .max(25, YupStrings.MaxCharError.username),
    password: Yup.string()
      .required(YupStrings.FieldError.password)
      .max(15, YupStrings.MaxCharError.password)
      .min(8, YupStrings.MinCharError.password)
      .matches(
        ValidateRegex.PassWord,
        `        Atleast add one 
        *Captital
        *Symbol
        *Number charcter`,
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    onSubmit: () => {
      navigation.dispatch(StackActions.replace('MainStack'));
    },
    validationSchema: validationSchema,
  });
  const navigation = useNavigation();

  const goToLoginPage = () => {
    navigation.dispatch(StackActions.replace('Login'));
  };

  const placeholderTextColor = '#009688';
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.root}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
          <View style={styles.headerStyle}>
            <Text style={styles.headerText}>Sign Up for New User!</Text>
            <View style={styles.createAccount}>
              <Text style={styles.textStyle}>Create a free account or</Text>
              <TouchableOpacity onPress={() => goToLoginPage()}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.inputFiledView}>
              <View style={styles.titleView}>
                <Text style={styles.inputName}>Email</Text>
              </View>
              <View>
                <TextInput
                  placeholderTextColor={placeholderTextColor}
                  style={styles.inputFiled}
                  placeholder="Email"
                  inputMode="text"
                  value={formik.values.email}
                  onChangeText={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                />
                {formik.errors.email && formik.touched.email ? (
                  <Text style={styles.errorText}>{formik.errors.email}</Text>
                ) : null}
              </View>
            </View>
            <View style={styles.inputFiledView}>
              <View style={styles.titleView}>
                <Text style={styles.inputName}>Username</Text>
              </View>
              <View>
                <TextInput
                  placeholderTextColor={placeholderTextColor}
                  style={styles.inputFiled}
                  placeholder="Username"
                  value={formik.values.username}
                  onChangeText={formik.handleChange('username')}
                  onBlur={formik.handleBlur('username')}
                />
                {formik.errors.username && formik.touched.username ? (
                  <Text style={styles.errorText}>{formik.errors.username}</Text>
                ) : null}
              </View>
            </View>
            <View style={styles.inputFiledView}>
              <View style={styles.titleView}>
                <Text style={styles.inputName}>Password</Text>
              </View>
              <View>
                <TextInput
                  placeholderTextColor={placeholderTextColor}
                  autoCorrect={false}
                  secureTextEntry={true}
                  style={styles.inputFiled}
                  placeholder="Password"
                  value={formik.values.password}
                  onChangeText={formik.handleChange('password')}
                  onBlur={formik.handleBlur('password')}
                />
                {formik.errors.password && formik.touched.password ? (
                  <Text style={styles.errorText}>{formik.errors.password}</Text>
                ) : null}
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.signUpView}
              onPress={formik.handleSubmit}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;
