import {MinusCircle, PlusCircle, Trash} from 'phosphor-react-native';
import {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import insideAppImage from '../../../assets/images/inside-app-image';
import {moderateScale} from '../../../themes/metrics';
import styles from './CartListStyles';

const Item = ({
  title,
  discountedPrice,
  discountPercentage,
  price,
  index,
  productCart,
  setProductCart,
  cartArray,
}) => {
  const [count, setCount] = useState(1);
  const [reamoveProduct, setRemoveProduct] = useState([]);

  const reamoveCartItem = index => {
    cartArray.splice(index, 1);
    setProductCart([...cartArray]);
  };

  const increaserCounter = () => {
    setCount(count => count + 1);
  };
  const decreaserCounter = () => {
    setCount(count => count - 1);
  };

  var totalValue = price * count;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.detailView}>
          <Text numberOfLines={1} style={styles.text}>
            Product: {title}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceStyle}>Price: ${discountedPrice}</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.offerImage}
                source={insideAppImage.offerImage}
              />
              <Text style={styles.discountText}>{discountPercentage}% off</Text>
            </View>
          </View>
          <View style={styles.discountPriceContainer}>
            <View>
              <Text style={styles.offerPriceText}>Offer Price: ${price}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.quantityText}>Qun:</Text>
              <TouchableOpacity
                onPress={() => decreaserCounter()}
                disabled={count === 1}>
                <MinusCircle size={23} />
              </TouchableOpacity>
              <Text style={styles.quantityStyle}>{count}</Text>
              <TouchableOpacity
                disabled={count === 20}
                onPress={() => increaserCounter()}>
                <PlusCircle size={23} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 0.1, borderWidth: 0.5, marginTop: 9}} />
          <View style={styles.lastRowView}>
            <Text style={styles.text}>Total value: ${totalValue}</Text>
            <TouchableOpacity onPress={() => reamoveCartItem(index)}>
              <Trash size={moderateScale(22)} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Item;
