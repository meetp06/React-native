import { View, Text, TouchableOpacity } from 'react-native';
import { applicationStyles } from '../../../theme';
import styles from './DrawerBoxStyles';

/*
 * Individual drawer item.
 *
 * @param {icon} - leading component to show.
 * @param {title} - title to display as drawer item name.
 * @param {onPress} - onPress handler for item.
 * @param {isFocused} - whether current item is in focus or not.
 * @return - splash screen
 */

const DrawerBox = ({ icon, title, onPress, isFocused }) => {
    const style = styles(isFocused);

    return (
        <TouchableOpacity
            style={style.itemRootContainer}
            onPress={onPress}>
            <View style={style.itemContainer}>
                <View style={style.drawerIcon}>{icon}</View>
                <Text
                    style={[
                        applicationStyles.drawerTitleStyle,
                        style.drawerTitleStyle,
                    ]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default DrawerBox;
