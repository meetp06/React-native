import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import style from './AccountStyles';
import { DeliveryInfo } from './delivery-info';

/*
 * Account screen consisting of user delivery details form.
 *
 * @return - component having delivery form.
 */

const AccountScreen = () => {
    return (
        <KeyboardAvoidingView
            style={style.root}
            behavior='height'
            keyboardVerticalOffset={50}>
            <ScrollView alwaysBounceVertical={false}>
                <View style={style.textContainer}>
                    <DeliveryInfo />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AccountScreen;
