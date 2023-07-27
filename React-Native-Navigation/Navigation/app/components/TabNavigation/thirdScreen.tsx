import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';
import style from '../FirstScreen/style';
import { useNavigation, useRoute } from '@react-navigation/native';

const ThirdDrawerScreen = () => {
    const navigation = useNavigation() as any;
    const route = useRoute() as any;

    console.log('====================================');
    console.log(route.name, 'rendered');
    console.log('====================================');

    const onClick = () => {
        navigation.navigate('ThirdScreenFromTab');
        // navigation.navigate('FirstDrawerScreen', {
        //     screen: 'ThirdScreenFromTab',
        // });
    };

    return (
        <View style={style.mainBody}>
            <Text style={style.textStyle}>{route.name}</Text>
            <CustomButton
                title={'Click'}
                onPress={onClick}
            />
        </View>
    );
};

export default ThirdDrawerScreen;
