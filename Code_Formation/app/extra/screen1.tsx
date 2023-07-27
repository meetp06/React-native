import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Text, StyleSheet, SafeAreaView, ScrollView, View, TextInput, Button } from 'react-native';

// create a component
const MyComponent = () => {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const PasswordSchema = Yup.object().shape({
        email: Yup.string().max(30, 'max 30 char').required().email().lowercase(),
        number: Yup.string().max(10, 'only ten').matches(phoneRegExp, 'Phone number is not valid').nonNullable().required('requied'),
        password: Yup.string().min(8, '8 char are reqired').max(20, 'not over above 20 char').required('requied'),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            number: '',
            password: '',
            extraNumber: '',
        },
        validationSchema: PasswordSchema,
        onSubmit: values => console.log(values)
    })

    const filedFunction = () => {
        formik.setFieldValue('extraNumber', 456)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
                    {/* <Formik
            initialValues={{
              email: '',
              number: '',
              password: '',
            }}
            validationSchema={PasswordSchema}
            onSubmit={values => console.log(values)}
          > */}

                    <View style={{ backgroundColor: 'white', width: 200, marginTop: 30 }}>
                        <TextInput
                            placeholder='email'
                            value={formik.values.email}
                            onChangeText={formik.handleChange('email')}
                            onBlur={formik.handleBlur('email')}
                            style={{ marginBottom: 30, marginTop: 20, backgroundColor: '#eee6ff', borderWidth: 1, padding: 10, width: '100%', flex: 1 }}
                        />
                        {formik.errors.email && formik.touched.email ? (<Text>{formik.errors.email}</Text>) : null}
                        <TextInput
                            placeholder='number'
                            onChangeText={formik.handleChange('number')}
                            onBlur={formik.handleBlur('number')}
                            style={{ marginBottom: 30, marginTop: 20, backgroundColor: '#eee6ff', borderWidth: 1, padding: 10, width: '100%', flex: 1 }}
                        />
                        {formik.errors.number && formik.touched.number ? (<Text>{formik.errors.number}</Text>) : null}
                        <TextInput
                            placeholder='password'
                            onChangeText={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                            style={{ marginBottom: 30, marginTop: 20, backgroundColor: '#eee6ff', borderWidth: 1, padding: 10, width: '100%', flex: 1 }}
                        />
                        {formik.errors.password && formik.touched.password ? (<Text>{formik.errors.password}</Text>) : null}

                        <Button onPress={formik.handleSubmit} title="Submit" />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default MyComponent;
