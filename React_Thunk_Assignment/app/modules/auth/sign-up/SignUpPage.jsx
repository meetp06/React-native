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
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import {Images} from '../../../assets/images';
import {ROUTEKEY} from '../../../constants';
import Regex from '../../../constants/Regex';
import {UserAction} from '../../../redux/user/UserSlice';
import YupStrings from '../../../utils/YupStrings';
import styles from './SignUpPageStyles';

// create a component
const SignUpPage = ({email, username, password}) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(YupStrings.FieldError.email)
      .matches(Regex.Email, YupStrings.Matches.email)
      .email(),
    password: Yup.string()
      .required(YupStrings.FieldError.password)
      .max(15, YupStrings.MaxCharError.password)
      .min(8, YupStrings.MinCharError.password)
      .matches(Regex.PassWord, YupStrings.Matches.password),
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
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit(values) {
      dispatch(
        UserAction.addUser({
          email: values.email,
          username: values.username,
          password: values.password,
        }),
      );
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
    navigation.replace(ROUTEKEY.LOGIN);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.root}>
        <ScrollView>
          <KeyboardAvoidingView behavior="position">
            <View style={styles.body}>
              <View style={styles.header}>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={Images.SIGNUP}
                />
              </View>

              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
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
              <View>
                <TouchableOpacity onPress={formik.handleSubmit}>
                  <View style={styles.signupView}>
                    <Text style={styles.signupText}>Sign up</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.footer}>
                <Text>if you have a account? </Text>
                <TouchableOpacity onPress={() => gotoLoginPage()}>
                  <Text style={styles.signupLinkText}>Log In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;
