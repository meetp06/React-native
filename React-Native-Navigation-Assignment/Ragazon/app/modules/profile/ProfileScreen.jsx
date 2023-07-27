import { KeyboardAvoidingView, View } from 'react-native';
import { ProfileInfo } from './profile-info';
import { CircularImage } from '../../components';
import { Images } from '../../assets';
import styles from './ProfileScreenStyles';

/*
 * Profile screen.
 *
 * @return - profile screen.
 */

const ProfileScreen = () => {
    return (
        <KeyboardAvoidingView
            style={styles.rootView}
            keyboardVerticalOffset={60}
            behavior='height'>
            <View style={styles.imageContainer}>
                <CircularImage src={Images.profile} />
            </View>

            <View style={styles.formContainer}>
                <ProfileInfo />
            </View>
        </KeyboardAvoidingView>
    );
};

export default ProfileScreen;
