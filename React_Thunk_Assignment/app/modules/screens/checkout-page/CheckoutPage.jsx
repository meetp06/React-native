import {useNavigation} from '@react-navigation/native';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {gif} from '../../../assets';
import {ROUTEKEY} from '../../../constants';
import styles from './CheckoutPageStyles';

const CkeckoutPage = () => {
  const totalValue = 100; // Replace with your total value
  const discount = 20; // Replace with your discount value

  const finalValue = totalValue - discount;
  const navigation = useNavigation();
  const gotoHome = () => {
    navigation.replace(ROUTEKEY.HOME);
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Success</Text>
        <View>
          <Image source={gif.OREDR} style={styles.gif} resizeMode="contain" />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Value:</Text>
          <Text style={styles.value}>{totalValue}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Discount:</Text>
          <Text style={styles.value}>{discount}</Text>
        </View>
        <View style={styles.finalValueView} />
        <View style={styles.row}>
          <Text style={styles.label}>Final Value:</Text>
          <Text style={[styles.value, styles.finalValue]}>{finalValue}</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => gotoHome()}>
            <Text style={styles.bottomText}>Continue Shopping....</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default CkeckoutPage;
