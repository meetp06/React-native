import { ScrollView, Text, View } from 'react-native';
import styles from './HomeScreenStyles';
import { CategoryList } from './category';
import { ProductList } from './products';

/*
 * Home screen component.
 *
 * @return - Home screen.
 */

const HomeScreen = () => {
    return (
        <View style={styles.rootView}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}>
                <View style={styles.stickyView}>
                    <Text style={styles.category}>Categories</Text>
                    <CategoryList />
                </View>
                <ProductList />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
