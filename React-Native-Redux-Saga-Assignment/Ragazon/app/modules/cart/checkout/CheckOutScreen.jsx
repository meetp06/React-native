import { useRoute } from '@react-navigation/native';
import { CheckCircle } from 'phosphor-react-native';
import { ScrollView, Text, View } from 'react-native';
import { STRINGS } from '../../../constants';
import { COLORS, applicationStyles } from '../../../theme';
import styles from './CheckOutScreenStyles';

/*
 * Checkout Screen.
 *
 * @return - checkout screen.
 */

const CheckOutScreen = () => {
  const route = useRoute();
  const subtotal = route.params.subtotal;

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.rootView}>
      <View style={styles.upperContainer}>
        <Text style={styles.thanksStyle}>Thanks!</Text>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.logoCenter}>
          <CheckCircle
            size={100}
            weight='fill'
            color={COLORS.PrimaryColor}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTextStyle}>Order Summary</Text>
          </View>
          <>
            <View style={styles.detailContainer}>
              <Text style={styles.infoTextStyle}>Sub Total</Text>
              <Text style={styles.infoTextStyle}>${subtotal}</Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.infoTextStyle}>Shipping Total</Text>
              <Text style={styles.infoTextStyle}>$5</Text>
            </View>
          </>
          <View style={styles.divider} />
          <View style={styles.detailContainer}>
            <Text style={styles.orderTotalTextStyle}>Order Total</Text>
            <Text style={styles.orderTotalTextStyle}>${subtotal + 5}</Text>
          </View>
        </View>
        <View style={applicationStyles.screen}>
          <Text style={styles.thanksPurchasingTextStyle}>
            {STRINGS.thanksMessage}
          </Text>
          <Text style={styles.shippingTextStyle}>
            {STRINGS.orderConfirmationMessage}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckOutScreen;
