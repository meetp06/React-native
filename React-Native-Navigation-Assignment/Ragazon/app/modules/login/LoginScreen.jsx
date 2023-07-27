import {
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    ActivityIndicator,
    View,
    Text,
} from 'react-native';
import styles from './LoginScreenStyles';
import { CustomButton, CustomTextInput } from '../../components';
import { COLORS, moderateScale } from '../../theme';
import { Images } from '../../assets';
import { applicationStyles } from '../../theme';
import { Envelope, Password } from 'phosphor-react-native';
import { useLogin } from './hook';
import { STRINGS } from '../../constants';

/*
 * Login screen.
 *
 * @return - login screen.
 */

const LoginScreen = () => {
    const { isLoading, formik } = useLogin();
    const emailOk = formik.touched.email && formik.errors.email;
    const passwordOk = formik.touched.password && formik.errors.password;

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
                style={applicationStyles.screen}
                behavior='height'>
                <ImageBackground
                    source={Images.loginBackground}
                    style={styles.backgroundImage}>
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
                            placeholder='Enter email'
                            onBlur={formik.handleBlur('email')}
                            onChangeText={formik.handleChange('email')}
                        />
                        {emailOk && (
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
                            placeholder='Enter password'
                            onBlur={formik.handleBlur('password')}
                            onChangeText={formik.handleChange('password')}
                        />
                        {passwordOk && (
                            <Text
                                style={
                                    applicationStyles.errorTextStyle
                                }>{`${formik.errors.password}`}</Text>
                        )}
                        <CustomButton
                            title={STRINGS.buttonTitles.login}
                            onPress={formik.handleSubmit}
                            isLoading={isLoading}
                            component={
                                <View style={styles.loaderComponent}>
                                    <ActivityIndicator
                                        size={'small'}
                                        color={COLORS.ComplementaryColor}
                                    />
                                </View>
                            }
                        />
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default LoginScreen;
