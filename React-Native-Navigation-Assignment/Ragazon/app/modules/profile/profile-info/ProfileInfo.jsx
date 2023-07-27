import { View, Text, TouchableOpacity } from 'react-native';
import { CustomButton, CustomTextInput } from '../../../components';
import styles from './ProfileInfoStyles';
import { Envelope, Password } from 'phosphor-react-native';
import { moderateScale, COLORS, applicationStyles } from '../../../theme';
import { useAccountInfo } from './hook';
import { STRINGS } from '../../../constants';

/*
 * Profile info component.
 *
 * @return - component having 2 textfield email and password.
 */

const AccountInfo = () => {
    const {
        isAccountEditClicked,
        toggleAccountEditClicked,
        accountCancelHandler,
        formik,
    } = useAccountInfo();

    const emailOk = formik.touched.email && formik.errors.email;
    const passwordOk = formik.touched.password && formik.errors.password;

    return (
        <View>
            <View style={styles.upperHeader}>
                <Text style={styles.textHeader}>Profile Information</Text>

                {!isAccountEditClicked && (
                    <TouchableOpacity onPress={toggleAccountEditClicked}>
                        <Text style={styles.textEdit}> Edit </Text>
                    </TouchableOpacity>
                )}
            </View>
            <CustomTextInput
                editable={isAccountEditClicked}
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
                editable={isAccountEditClicked}
                leadingIconSrc={
                    <Password
                        size={moderateScale(30)}
                        color={COLORS.PrimaryColor}
                        weight='duotone'
                    />
                }
                defaultValue=''
                autoCorrect={false}
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
            {isAccountEditClicked && (
                <CustomButton
                    title={STRINGS.buttonTitles.done}
                    onPress={formik.handleSubmit}
                />
            )}
            {isAccountEditClicked && (
                <CustomButton
                    title={STRINGS.buttonTitles.cancel}
                    onPress={accountCancelHandler}
                />
            )}
        </View>
    );
};

export default AccountInfo;
