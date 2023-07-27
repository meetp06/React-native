import { Formik } from "formik";
import { SafeAreaView, Text, View } from "react-native";


const MyComponent2 = () => {
    return (
        <SafeAreaView>
            <View>
                <Formik
                    initialValues={{
                        user: ['Meet', 'Meet2', 'Meet3']
                    }}
                    onSubmit={values => console.log(values)
                    }
                >

                    <View>
                        <Text>

                        </Text>
                    </View>
                </Formik>
            </View>
        </SafeAreaView>
    )
}

export default MyComponent2;