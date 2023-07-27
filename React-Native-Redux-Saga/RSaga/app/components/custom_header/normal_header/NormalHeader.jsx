import { Text, TouchableOpacity, View } from 'react-native';
import style from './NormalHeaderStyles';

/*
 * Normal Generic Header.
 *
 * @param {title} - title of the header.
 * @param {leftComponent} - component which will be displayed to left side.
 * @param {leftComponentOnPress} - onPress handler.
 * @param {rightComponent} - component which will be displayed to right side.
 * @param {rightComponentOnPress} - onPress handler.
 * @return - generic screen header.
 */

const NormalHeader = ({
    title,
    leftComponent,
    leftComponentOnPress,
    rightComponent,
    rightComponentOnPress,
}) => {
    return (
        <View style={style.rootView}>
            <View style={style.iconStyle}>
                <TouchableOpacity onPress={leftComponentOnPress}>
                    {leftComponent}
                </TouchableOpacity>
            </View>
            <View style={style.titleContainer}>
                <Text style={style.titleStyle}>{title}</Text>
            </View>
            <View style={style.iconStyle}>
                {rightComponent ? (
                    <TouchableOpacity
                        style={style.rightComponent}
                        onPress={rightComponentOnPress}>
                        {rightComponent}
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
};

export default NormalHeader;
