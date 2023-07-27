import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './app/components/DrawerNavigation';

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    );
};

export default App;
