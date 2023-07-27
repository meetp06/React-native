import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useFormik} from 'formik';
import {Envelope, FingerprintSimple} from 'phosphor-react-native';
import {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import insideAppImage from '../../../assets/images/inside-app-image';
import {moderateScale} from '../../../themes/metrics';
import {YupStrings} from '../../../utils';
import styles from './LoginScreenStyles';

const LoginScreen = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required(YupStrings.FieldError.username)
      .min(2, YupStrings.MinCharError.username)
      .max(25, YupStrings.MaxCharError.username),
    userPassword: Yup.string().required(YupStrings.FieldError.loginPassword),
  });

  const navigation = useNavigation();
  const [userIdData, setUserData] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  const getUser = async (username, userPassword) => {
    try {
      const response = await axios({
        url: 'https://dummyjson.com/auth/login',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        data: {
          username: username,
          password: userPassword,
        },
      }).then(response => {
        setUserData(response);
        storeLoginCredential();
        navigation.dispatch(StackActions.replace('MainStack'));
      });
    } catch (e) {
      Alert.alert('Not valid caredential', 'Enter valid user information');
    }
  };

  const storeLoginCredential = async () => {
    const LoginCredential = await AsyncStorage.setItem('LoginData', isLogin);
  };

  const gotoSignupPage = () => {
    navigation.navigate('SignUp');
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      userPassword: '',
    },
    onSubmit(values) {
      getUser(values.username, values.userPassword);
    },
    validationSchema: validationSchema,
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainView}>
        <ImageBackground
          blurRadius={4}
          source={insideAppImage.loginBackgroundImage}
          style={styles.imageBackGround}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <View style={styles.appNameStyle}>
              <Image source={insideAppImage.appIcon} style={styles.appIcon} />

              <View style={styles.inputFiled}>
                <View style={styles.filedView}>
                  <View style={styles.mainFiledView}>
                    <Envelope
                      size={moderateScale(31)}
                      style={styles.icon}
                      color="white"
                    />
                    <TextInput
                      maxLength={25}
                      autoCapitalize="none"
                      placeholder="Username"
                      style={styles.textInput}
                      value={formik.values.username}
                      onChangeText={formik.handleChange('username')}
                      onBlur={formik.handleBlur('username')}
                    />
                  </View>
                  <View style={styles.errorFiled}>
                    {formik.errors.username && formik.touched.username ? (
                      <Text style={styles.textStyle}>
                        {formik.errors.username}
                      </Text>
                    ) : null}
                  </View>
                </View>

                <View style={styles.filedView}>
                  <View style={styles.mainFiledView}>
                    <FingerprintSimple
                      size={moderateScale(31)}
                      style={styles.icon}
                      color="white"
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
                  <View style={styles.errorFiled}>
                    {formik.errors.userPassword &&
                    formik.touched.userPassword ? (
                      <Text style={styles.textStyle}>
                        {formik.errors.userPassword}
                      </Text>
                    ) : null}
                  </View>
                </View>
              </View>

              <View style={styles.loginView}>
                <TouchableOpacity onPress={formik.handleSubmit}>
                  <Text style={styles.logIn}> Log In </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.footerBar}>
                <TouchableOpacity onPress={() => gotoSignupPage()}>
                  <Text style={styles.bottomText}>Create account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
