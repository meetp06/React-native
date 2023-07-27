import { View, Text, TouchableOpacity } from 'react-native';
import styles from './DeliveryInfoStyles';
import { CustomButton, CustomTextInput } from '../../../components';
import { COLORS, applicationStyles, moderateScale } from '../../../theme';
import {
    AddressBook,
    Globe,
    IdentificationBadge,
    IdentificationCard,
    Phone,
    Buildings,
    Storefront,
} from 'phosphor-react-native';
import { useDeliveryInfo } from './hooks';
import { STRINGS } from '../../../constants';

/*
 * Form having textInputs for the delivery details.
 *
 * @return - form.
 */

const DeliveryInfo = () => {
    const { isEditClicked, cancelHandler, toggleEditClicked, formik } =
        useDeliveryInfo();

    const fNameOk =
        (formik.touched.fName || formik.submitCount) && formik.errors.fName;
    const lNameOk =
        (formik.touched.lName || formik.submitCount) && formik.errors.lName;
    const phoneOk =
        (formik.touched.phone || formik.submitCount) && formik.errors.phone;
    const countryOk =
        (formik.touched.country || formik.submitCount) && formik.errors.country;
    const cityOk =
        (formik.touched.city || formik.submitCount) && formik.errors.city;
    const stateOk =
        (formik.touched.state || formik.submitCount) && formik.errors.state;
    const addressOk =
        (formik.touched.address || formik.submitCount) && formik.errors.address;

    return (
        <>
            <View style={styles.upperHeader}>
                <Text style={styles.textHeader}>Delivery Information</Text>
                {!isEditClicked && (
                    <TouchableOpacity onPress={toggleEditClicked}>
                        <Text style={styles.textEdit}> Edit </Text>
                    </TouchableOpacity>
                )}
            </View>

            <CustomTextInput
                leadingIconSrc={
                    <IdentificationBadge
                        size={moderateScale(30)}
                        color={COLORS.PrimaryColor}
                        weight='duotone'
                    />
                }
                placeholder={'Enter first name'}
                autoCorrect={false}
                value={formik.values.fName}
                editable={isEditClicked}
                maxLength={10}
                keyboardType='default'
                onBlur={formik.handleBlur('fName')}
                onChangeText={formik.handleChange('fName')}
            />
            {fNameOk !== 0 && isEditClicked && (
                <Text
                    style={
                        applicationStyles.errorTextStyle
                    }>{`${formik.errors.fName}`}</Text>
            )}
            <CustomTextInput
                leadingIconSrc={
                    <IdentificationCard
                        size={moderateScale(30)}
                        color={COLORS.PrimaryColor}
                        weight='duotone'
                    />
                }
                placeholder={'Enter last name'}
                autoCorrect={false}
                maxLength={10}
                value={formik.values.lName}
                editable={isEditClicked}
                keyboardType='default'
                onBlur={formik.handleBlur('lName')}
                onChangeText={formik.handleChange('lName')}
            />
            {lNameOk !== 0 && isEditClicked && (
                <Text
                    style={
                        applicationStyles.errorTextStyle
                    }>{`${formik.errors.lName}`}</Text>
            )}
            <CustomTextInput
                leadingIconSrc={
                    <Phone
                        size={moderateScale(30)}
                        color={COLORS.PrimaryColor}
                        weight='duotone'
                    />
                }
                placeholder={'Enter phone number'}
                value={formik.values.phone}
                editable={isEditClicked}
                keyboardType='phone-pad'
                onBlur={formik.handleBlur('phone')}
                onChangeText={formik.handleChange('phone')}
            />
            {phoneOk !== 0 && isEditClicked && (
                <Text
                    style={
                        applicationStyles.errorTextStyle
                    }>{`${formik.errors.phone}`}</Text>
            )}
            <CustomTextInput
                leadingIconSrc={
                    <Globe
                        size={moderateScale(30)}
                        color={COLORS.PrimaryColor}
                        weight='duotone'
                    />
                }
                placeholder={'Enter country'}
                value={formik.values.country}
                editable={isEditClicked}
                autoCorrect={false}
                keyboardType='default'
                onBlur={formik.handleBlur('country')}
                onChangeText={formik.handleChange('country')}
            />
            {countryOk !== 0 && isEditClicked && (
                <Text
                    style={
                        applicationStyles.errorTextStyle
                    }>{`${formik.errors.country}`}</Text>
            )}
            <CustomTextInput
                leadingIconSrc={
                    <Buildings
                        size={moderateScale(30)}
                        color={COLORS.PrimaryColor}
                        weight='duotone'
                    />
                }
                placeholder={'Enter city'}
                value={formik.values.city}
                editable={isEditClicked}
                autoCorrect={false}
                keyboardType='default'
                onBlur={formik.handleBlur('city')}
                onChangeText={formik.handleChange('city')}
            />
            {cityOk !== 0 && isEditClicked && (
                <Text
                    style={
                        applicationStyles.errorTextStyle
                    }>{`${formik.errors.city}`}</Text>
            )}
            <CustomTextInput
                leadingIconSrc={
                    <Storefront
                        size={moderateScale(30)}
                        color={COLORS.PrimaryColor}
                        weight='duotone'
                    />
                }
                placeholder={'Enter state'}
                value={formik.values.state}
                editable={isEditClicked}
                autoCorrect={false}
                keyboardType='default'
                onBlur={formik.handleBlur('state')}
                onChangeText={formik.handleChange('state')}
            />
            {stateOk !== 0 && isEditClicked && (
                <Text
                    style={
                        applicationStyles.errorTextStyle
                    }>{`${formik.errors.state}`}</Text>
            )}
            <CustomTextInput
                leadingIconSrc={
                    <AddressBook
                        size={moderateScale(30)}
                        color={COLORS.PrimaryColor}
                        weight='duotone'
                    />
                }
                placeholder={'Enter address line'}
                value={formik.values.address}
                editable={isEditClicked}
                autoCorrect={false}
                keyboardType='default'
                onBlur={formik.handleBlur('address')}
                onChangeText={formik.handleChange('address')}
            />
            {addressOk !== 0 && isEditClicked && (
                <Text
                    style={
                        applicationStyles.errorTextStyle
                    }>{`${formik.errors.address}`}</Text>
            )}
            {isEditClicked && (
                <CustomButton
                    title={STRINGS.buttonTitles.done}
                    onPress={formik.handleSubmit}
                />
            )}
            {isEditClicked && (
                <CustomButton
                    title={STRINGS.buttonTitles.cancel}
                    onPress={cancelHandler}
                />
            )}
        </>
    );
};

export default DeliveryInfo;
