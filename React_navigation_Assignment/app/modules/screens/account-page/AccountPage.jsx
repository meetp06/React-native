import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useFormik} from 'formik';
import {
  ChartBar,
  DeviceMobileCamera,
  Envelope,
  FingerprintSimple,
  GlobeSimple,
  IdentificationBadge,
  MapPin,
  Package,
  SunHorizon,
} from 'phosphor-react-native';
import {useEffect, useState} from 'react';
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
import {moderateScale} from '../../../themes/metrics';
import Strings from '../../../utils/schemas/YupStrings';
import styles from './AccountPageStyles';

const AccountPage = () => {
  const [userAccountData, setUserAccountData] = useState([]);
  const formik = useFormik({
    initialValues: {
      country: '',
      fullName: '',
      number: '',
      pincode: '',
      address: '',
      city: '',
      state: '',
      email: '',
      password: '',
    },
    onSubmit: storeUsetData => {
      async () =>
        await JSON.stringify(AsyncStorage.setItem('UserData', storeUsetData));
    },
    validationSchema: validationSchema,
  });

  const validationSchema = Yup.object().shape({
    country: Yup.string()
      .max(15, Strings.MaxCharError.country)
      .min(2, Strings.MinCharError.country)
      .required(Strings.FieldError.country),
    fullName: Yup.string()
      .max(20, Strings.MaxCharError.fullName)
      .min(5, Strings.MinCharError.fullName)
      .required(Strings.FieldError.fullName),
    number: Yup.string()
      .max(10, Strings.MaxCharError.number)
      .min(10, Strings.MinCharError.number)
      .required(Strings.FieldError.number)
      .matches(ValidateRegex.PhoneNumber),
    pincode: Yup.string()
      .max(6, Strings.MaxCharError.pincode)
      .min(6, Strings.MinCharError.pincode)
      .required(Strings.FieldError.pincode),
    // landmark: Yup.string()
    //   .max(11, Strings.MaxCharError.landmark)
    //   .min(5, Strings.MinCharError.landmark)
    //   .required(Strings.FieldError.landmark),
    address: Yup.string()
      .max(40, Strings.MaxCharError.address)
      .min(10, Strings.MinCharError.address)
      .required(Strings.FieldError.address),
    city: Yup.string()
      .max(15, Strings.MaxCharError.city)
      .min(2, Strings.MinCharError.city)
      .required(Strings.FieldError.city),
    state: Yup.string()
      .max(15, Strings.MaxCharError.state)
      .min(2, Strings.MinCharError.state)
      .required(Strings.FieldError.state),
    email: Yup.string()
      .required(Strings.FieldError.email)
      .matches(ValidateRegex.Email, 'Email is not valid')
      .email(),
    password: Yup.string()
      .max(15, Strings.MaxCharError.password)
      .min(8, Strings.MinCharError.password)
      .required(Strings.FieldError.password)
      .matches(
        ValidateRegex.PassWord,
        `        Atleast add one 
        *Captital
        *Symbol
        *Number charcter`,
      ),
  });

  const UserData = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/users/1');
      const data = res.data;
      formik.setValues({
        country: data.address.state,
        fullName: data.firstName,
        number: data.phone,
        pincode: data.address.postalCode,
        address: data.address.postalCode,
        city: data.address.city,
        state: data.address.state,
        email: data.email,
        password: data.password,
      });
    } catch (e) {}
  };

  useEffect(() => {
    UserData();
  }, []);

  const getUserData = async () => {
    const userData = await JSON.parse(AsyncStorage.getItem('UserData'));
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerStyle}>Delivery Information :</Text>
          </View>

          <View style={styles.inputView}>
            <GlobeSimple size={moderateScale(22)} style={styles.icon} />
            <TextInput
              maxLength={15}
              placeholder="Country *"
              inputMode="text"
              style={styles.nameInput}
              value={formik.values.country}
              onChangeText={formik.handleChange('country')}
              onBlur={formik.handleBlur('country')}
            />
          </View>
          {formik.errors.country && formik.touched.country ? (
            <Text style={styles.textStyle}>{formik.errors.country}</Text>
          ) : null}

          <View style={styles.inputView}>
            <IdentificationBadge size={moderateScale(22)} style={styles.icon} />
            <TextInput
              maxLength={20}
              placeholder="FullName *"
              inputMode="text"
              style={styles.nameInput}
              value={formik.values.fullName}
              onChangeText={formik.handleChange('fullName')}
              onBlur={formik.handleBlur('fullName')}
            />
          </View>
          {formik.errors.fullName && formik.touched.fullName ? (
            <Text style={styles.textStyle}>{formik.errors.fullName}</Text>
          ) : null}

          <View style={styles.inputView}>
            <DeviceMobileCamera size={moderateScale(22)} style={styles.icon} />
            <TextInput
              maxLength={10}
              placeholder="Phone Number *"
              inputMode="tel"
              style={styles.nameInput}
              value={formik.values.number}
              onChangeText={formik.handleChange('number')}
              onBlur={formik.handleBlur('number')}
            />
          </View>
          {formik.errors.number && formik.touched.number ? (
            <Text style={styles.textStyle}>{formik.errors.number}</Text>
          ) : null}

          <View style={styles.inputView}>
            <Package size={moderateScale(22)} style={styles.icon} />
            <TextInput
              maxLength={6}
              placeholder="Pincode *"
              inputMode="numeric"
              style={styles.nameInput}
              value={formik.values.pincode}
              onChangeText={formik.handleChange('pincode')}
              onBlur={formik.handleBlur('pincode')}
            />
          </View>
          {formik.errors.pincode && formik.touched.pincode ? (
            <Text style={styles.textStyle}>{formik.errors.pincode}</Text>
          ) : null}

          <View style={styles.adressView}>
            <MapPin size={moderateScale(22)} style={styles.adressicon} />
            <TextInput
              maxLength={40}
              placeholder="Delivery Adress *"
              inputMode="text"
              multiline={true}
              style={styles.adressInput}
              value={formik.values.address}
              onChangeText={formik.handleChange('address')}
              onBlur={formik.handleBlur('address')}
            />
          </View>
          {formik.errors.address && formik.touched.address ? (
            <Text style={styles.textStyle}>{formik.errors.address}</Text>
          ) : null}

          <View style={styles.inputView}>
            <SunHorizon size={moderateScale(22)} style={styles.icon} />
            <TextInput
              maxLength={15}
              placeholder="City *"
              inputMode="text"
              style={styles.nameInput}
              value={formik.values.city}
              onChangeText={formik.handleChange('city')}
              onBlur={formik.handleBlur('city')}
            />
          </View>
          {formik.errors.city && formik.touched.country ? (
            <Text style={styles.textStyle}>{formik.errors.city}</Text>
          ) : null}

          <View style={styles.inputView}>
            <ChartBar size={moderateScale(22)} style={styles.icon} />
            <TextInput
              maxLength={15}
              style={styles.nameInput}
              placeholder="State *"
              inputMode="text"
              value={formik.values.state}
              onChangeText={formik.handleChange('state')}
              onBlur={formik.handleBlur('state')}
            />
          </View>
          {formik.errors.state && formik.touched.state ? (
            <Text style={styles.textStyle}>{formik.errors.state}</Text>
          ) : null}

          <View style={styles.inputView}>
            <Envelope size={moderateScale(22)} style={styles.icon} />
            <TextInput
              maxLength={30}
              style={styles.nameInput}
              autoCapitalize="none"
              placeholder="Email *"
              inputMode="email"
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />
          </View>
          {formik.errors.email && formik.touched.email ? (
            <Text style={styles.textStyle}>{formik.errors.email}</Text>
          ) : null}

          <View style={styles.inputView}>
            <FingerprintSimple size={moderateScale(22)} style={styles.icon} />
            <TextInput
              maxLength={15}
              textContentType="password"
              secureTextEntry={true}
              style={styles.nameInput}
              placeholder="Password *"
              inputMode="text"
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
          </View>
          {formik.errors.password && formik.touched.password ? (
            <Text style={styles.textStyle}>{formik.errors.password}</Text>
          ) : null}

          <View style={styles.saveContainer}>
            <TouchableOpacity onPress={formik.handleSubmit}>
              <Text style={styles.save}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={formik.handleSubmit}>
              <Text style={styles.save}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AccountPage;
