import {CommonActions, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useFormik} from 'formik';
import {useEffect, useState} from 'react';
import {
  Alert,
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
import styles from './LogInStyles';

// create a Login component
const LoginPage = () => {
  const [isLogin, setIsLogin] = useState();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(YupStrings.FieldError.email)
      .matches(Regex.Email, 'Email is not valid')
      .email(),
    password: Yup.string().required(YupStrings.FieldError.password),
  });

  const userLogin = () => {
    try {
      const response = axios
        .post('https://reqres.in/api/login', {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka',
        })
        .then(response => setIsLogin(response));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    userLogin();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      if (
        values.email === 'eve.holt@reqres.in' &&
        values.password === 'cityslicka'
      ) {
        const resetAction = CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
        navigation.dispatch(resetAction);
      } else {
        Alert.alert('Invalid credentials');
      }
    },
    validationSchema: validationSchema,
  });

  const navigation = useNavigation();

  const gotoSignupPage = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{name: 'Sign Up'}],
    });
    navigation.dispatch(resetAction);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <Image style={styles.topImage} source={images.LoginTop} />
          <View style={styles.body}>
            <View style={styles.headerText}>
              <Text style={styles.firstText}>Hello there</Text>
              <Text style={styles.secondText}>welcome back</Text>
            </View>
            <View style={styles.textInputView}>
              <TextInput
                placeholderTextColor={'#a1aadd'}
                style={styles.textInput}
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
                placeholderTextColor={'#a1aadd'}
                style={styles.textInput}
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
              />
              {formik.errors.password && formik.touched.password ? (
                <Text style={styles.errorText}>{formik.errors.password}</Text>
              ) : null}
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                flex: 1,
              }}>
              <View style={styles.loginView}>
                <TouchableOpacity onPress={formik.handleSubmit}>
                  <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footer}>
                <Text>New here? </Text>
                <TouchableOpacity onPress={() => gotoSignupPage()}>
                  <Text style={styles.signupText}>Sign Up instead</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default LoginPage;
