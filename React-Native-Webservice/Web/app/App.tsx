import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { BouncingLoader } from './components';
import { useApp } from './hooks';

const App = () => {
    const { isLoading } = useApp();

    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {isLoading ? <BouncingLoader /> : null}
            <Text>HI</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default App;
