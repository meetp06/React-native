import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Alert } from 'react-native';

// create a component
const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label={'Hoopme'}
                onPress={() => Alert.alert('Info will soon....')}
            />
        </DrawerContentScrollView>
    );
};

//make this component available to the app
export default CustomDrawer;
