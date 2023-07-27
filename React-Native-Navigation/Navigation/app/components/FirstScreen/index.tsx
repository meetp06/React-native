import { Text, View } from 'react-native';
import style from './style';
import CustomButton from '../CustomButton';
import {
    useFocusEffect,
    useNavigation,
    useNavigationState,
    useRoute,
    useTheme,
} from '@react-navigation/native';

const FirstScreen = (prop: any) => {
    const navigation = useNavigation() as any;
    const route = useRoute() as any;
    const theme = useTheme();

    useFocusEffect(() => {
        console.log('====================================');
        console.debug(route.name, 'came into focus');
        console.log(theme);
        console.log('====================================');
    });

    const state = useNavigationState((state) => state);
    console.log('====================================');
    console.log('🚀 ~ file: index.tsx:13 ~ onClick ~ state:', state);
    console.log('====================================');

    const onClick = () => {
        // navigation.navigate('ThirdScreen');
        navigation.navigate('SecondNested', { screen: 'SecondScreen2' });
    };

    const onClickToHide = () => {
        const parentNavigation = navigation.getParent();
        parentNavigation.setOptions({
            tabBarStyle: {
                display: 'none',
            },
        });
    };

    const onClickToShow = () => {
        const parentNavigation = navigation.getParent();
        parentNavigation.setOptions({
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

export default FirstScreen;
