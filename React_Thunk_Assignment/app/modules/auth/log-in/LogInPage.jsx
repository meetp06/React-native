import {CommonActions, useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {Envelope, FingerprintSimple} from 'phosphor-react-native';
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
import {moderateScale} from '../../../themes';
import YupStrings from '../../../utils/YupStrings';
import styles from './LogInPageStyles';

// create a component
const LoginPage = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(YupStrings.FieldError.email)
      .max(30, YupStrings.MaxCharError.email)
      .matches(Regex.Email, YupStrings.Matches.email),
    userPassword: Yup.string()
      .required(YupStrings.FieldError.password)
      .matches(Regex.PassWord, YupStrings.Matches.password)
      .max(20, YupStrings.MaxCharError.password),
  });

  const navigation = useNavigation();

  const gotoSignupPage = () => {
    navigation.navigate(ROUTEKEY.SIGNUP);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      userPassword: '',
    },
    onSubmit(values) {
      dispatch(
        UserAction.checkUser({
          email: values.email,
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

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.root}>
        <KeyboardAvoidingView behavior="height">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.imageView}>
              <Image
                resizeMode="contain"
                source={Images.LOGIN}
                style={styles.loginImage}
              />
            </View>
            <View style={styles.inputFiledView}>
              <View style={styles.inputBoxView}>
                <View style={styles.inputView}>
                  <Envelope
                    size={moderateScale(31)}
                    style={styles.icon}
                    color="black"
                  />
                  <TextInput
                    maxLength={25}
                    autoCapitalize="none"
                    placeholder="Email"
                    style={styles.textInput}
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                  />
                </View>

                <View>
                  {formik.errors.email && formik.touched.email ? (
                    <Text style={styles.errorText}>{formik.errors.email}</Text>
                  ) : null}
                </View>
              </View>

              <View style={styles.inputBoxView}>
                <View style={styles.inputView}>
                  <FingerprintSimple
                    size={moderateScale(31)}
                    style={styles.icon}
                    color="black"
                  />
                  <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    maxLength={25}
                    value={formik.values.userPassword}
                    onChangeText={formik.handleChange('userPassword')}
                    textContentType="password"
                    secureTextEntry={true}
                    onBlur={formik.handleBlur('userPassword')}
                  />
                </View>

                <View>
                  {formik.errors.userPassword && formik.touched.userPassword ? (
                    <Text style={styles.errorText}>
                      {formik.errors.userPassword}
                    </Text>
                  ) : null}
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={formik.handleSubmit}>
              <View style={styles.loginView}>
                <Text style={styles.loginText}>Login</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.createAcoountView}>
              <TouchableOpacity onPress={() => gotoSignupPage()}>
                <Text style={styles.createAcoount}>Create account</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default LoginPage;
