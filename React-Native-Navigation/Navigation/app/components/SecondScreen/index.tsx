import { Text, View } from 'react-native';
import style from './style';
import CustomButton from '../CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';

const SecondScreen = () => {
    const navigation = useNavigation() as any;
    const route = useRoute() as any;

    const state = navigation.getState();
    console.log('====================================');
    console.log('🚀 ~ file: index.tsx:13 ~ onClick ~ state:', state);
    console.log('====================================');

    const onClick = () => {
        navigation.navigate('ThirdScreen', {
            titleGiven: 'Third Screen From 2rd',
        });
    };

    const onClickToHide = () => {
        navigation.setOptions({
            tabBarStyle: {
                display: 'none',
            },
        });
    };

    const onClickToShow = () => {
        navigation.setOptions({
            tabBarStyle: {
                display: 'flex',
            },
        });
    };

    return (
        <View style={style.mainBody}>
            <Text style={style.textStyle}>{route.name}</Text>
            <CustomButton
                title={'Click'}
                onPress={onClick}
            />
            <CustomButton
                title={'Click to hide'}
                onPress={onClickToHide}
            />
            <CustomButton
                title={'Click to Show'}
                onPress={onClickToShow}
            />
        </View>
    );
};

export default SecondScreen;
