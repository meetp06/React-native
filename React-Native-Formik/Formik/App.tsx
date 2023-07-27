import { useFormik } from 'formik';
import * as Yup from 'yup';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useRef } from 'react';

import { Envelope } from 'phosphor-react-native';
import { CustomTextInput } from './app/components';
import CustomButton from './app/components/custom_button';

const LoginValidationSchema = Yup.object({
    password: Yup.string()
        .min(8, 'Should be minimum of 8 chars!!')
        .required('Required')
        .strict()
        .lowercase('Not lower'),

    email: Yup.string().email('Invalid email').required('Required'),
});

const App = () => {
    const ref = useRef(0);
    const formik = useFormik({
        initialValues: { password: '', email: '' },
        validateOnBlur: true,
        validationSchema: LoginValidationSchema,
        onSubmit: (values: any) => {
            console.log('====================================');
            console.log(values);
            console.log('====================================');
        },
    } as any);

    console.log('====================================');
    console.log('Called times', ref.current);
    ref.current++;
    console.log('====================================');

    return (
        <SafeAreaView style={styles.root}>
            {/* <Formik
                initialValues={{ password: '', email: '' }}
                validationSchema={LoginValidationSchema}
                onSubmit={(values, formikHelpers) => {
                    console.log(values);
                    // formikHelpers.resetForm();
                }}>
                {({
                    values,
                    errors,
                    touched,
                    isValid,
                    handleChange,
                    handleSubmit,
                    handleReset,
                    handleBlur,
                }) => (
                    <View style={styles.container}>
                        {touched.email && errors.email && (
                            <Text>{errors.email}</Text>
                        )}

                        <TextInput
                            style={styles.textInput}
                            value={values.email}
                            onBlur={handleBlur('email')}
                            onChangeText={handleChange('email')}
                        />

                        {touched.password && errors.password && (
                            <Text>{errors.password}</Text>
                        )}

                        <TextInput
                            style={styles.textInput}
                            value={values.password}
                            onBlur={handleBlur('password')}
                            onChangeText={handleChange('password')}
                        />

                        <View style={styles.buttonRow}>
                            <Button
                                onPress={handleSubmit}
                                title='Submit'
                            />
                            <Button
                                onPress={handleReset}
                                title='Reset'
                            />
                        </View>
                    </View>
                )}
            </Formik> */}

            <View style={styles.container}>
                {formik.touched.email && formik.errors.email && (
                    <Text>{`${formik.errors.email}`}</Text>
                )}

                <CustomTextInput
                    value={formik.values.email}
                    leadingIconSrc={
                        <Envelope
                            size={32}
                            color='purple'
                            weight='duotone'
                        />
                    }
                    placeholder='Enter email'
                    onBlur={formik.handleBlur('email')}
                    onChangeText={formik.handleChange('email')}
                />

                {formik.touched.password && formik.errors.password && (
                    <Text>{`${formik.errors.password}`}</Text>
                )}

                <CustomTextInput
                    defaultValue=''
                    value={formik.values.password}
                    placeholder='Enter password'
                    onBlur={formik.handleBlur('password')}
                    onChangeText={formik.handleChange('password')}
                />

                <View style={styles.buttonRow}>
                    <CustomButton title={'Submit'} />

                    {/* <Button
                        onPress={formik.handleReset}
                        title='Reset'
                    />

                    <Button
                        onPress={async () => {
                            // formik.setFieldValue('email', 'qaisar@email.com');
                            // formik.setFieldError('email', 'Custom Error');
                            // formik.setErrors({
                            //     email: 'Custom error email',
                            //     password: 'Custom password',
                            // });
                            // formik.setFormikState((prop) => {
                            //     console.log(
                            //         '===================================='
                            //     );
                            //     console.log(prop);
                            //     console.log(
                            //         '===================================='
                            //     );
                            //     const newProp = { ...prop };
                            //     newProp.values.email = 'Kai';
                            //     return newProp;
                            // });
                        }}
                        title='Set Value'
                    /> */}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        padding: 10,
        width: '100%',
    },

    textInput: {
        padding: 5,
        margin: 5,
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default App;
