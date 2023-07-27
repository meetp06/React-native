import { View, Text, TouchableOpacity } from 'react-native';
import style from './NormalHeaderStyles';

/*
 * Normal Generic Header.
 *
 * @param {title} - title of the header.
 * @param {leftComponent} - component which will be displayed to left side.
 * @param {leftComponentOnPress} - onPress handler.
 * @return - generic screen header.
 */

const NormalHeader = ({ title, leftComponent, leftComponentOnPress }) => {
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
            <View style={style.iconStyle}></View>
        </View>
    );
};

export default NormalHeader;
