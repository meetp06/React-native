import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';
import style from '../FirstScreen/style';
import { useNavigation, useRoute } from '@react-navigation/native';

const FourthDrawerScreen = () => {
    const navigation = useNavigation() as any;
    const route = useRoute() as any;

    console.log('====================================');
    console.log(route.name, 'rendered');
    console.log('====================================');

    const onClick = () => {
        // navigation.navigate('ThirdScreen');
        navigation.navigate('SecondNested', { screen: 'SecondScreen2' });
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

export default FourthDrawerScreen;
