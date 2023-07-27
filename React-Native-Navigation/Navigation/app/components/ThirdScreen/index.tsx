import { Text, View } from 'react-native';
import style from './style';
import CustomButton from '../CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';

const ThirdScreen = () => {
    const navigation = useNavigation() as any;
    const route = useRoute() as any;

    const state = navigation.getState();
    console.log('====================================');
    console.log('🚀 ~ file: index.tsx:13 ~ onClick ~ state:', state);
    console.log('====================================');

    const onClick = () => {
        navigation.setOptions({ title: 'Not from 3rd' });

        navigation.navigate('SecondNested', {
            screen: 'SecondScreen2',
            titleGiven: 'From 3rd',
        });
    };

    return (
        <View style={style.mainBody}>
            <Text style={style.textStyle}> {route.name} </Text>
            <CustomButton
                title={'Click'}
                onPress={onClick}
            />
        </View>
    );
};

export default ThirdScreen;
