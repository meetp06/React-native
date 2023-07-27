import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HomePage } from './modules';
import { persistor, store } from './redux';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <SafeAreaView style={styles.root}>
                    <HomePage />
                </SafeAreaView>
            </PersistGate>
        </Provider>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default App;
