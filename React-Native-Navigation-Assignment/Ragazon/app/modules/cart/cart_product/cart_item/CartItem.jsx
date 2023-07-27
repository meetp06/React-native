import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MinusCircle, PlusCircle, Trash } from 'phosphor-react-native';
import styles from './CartItemStyles';
import { moderateScale } from '../../../../theme';
import { useCartItem } from './hooks';

/*
 * Individual Cart item view.
 *
 * @param {item} - current cart product.
 * @param {index} - index of the product.
 * @return - cart item component.
 */

const ItemCart = ({ item, index }) => {
    const {
        handleDecrement,
        handleDelete,
        handleIncrement,
        currentProduct,
        itemCount,
    } = useCartItem(item, index);

    return (
        <View style={styles.root}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: currentProduct.image }}
                />
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <Text
                        numberOfLines={1}
                        style={styles.textStyle}>
                        {currentProduct.title}
                    </Text>
                </View>
                <Text style={styles.category}>{currentProduct.category}</Text>
                <View style={styles.deleteQtyRow}>
                    <View style={styles.qtyContainer}>
                        <Text style={styles.qtyTextStyle}>QTY : </Text>
                        <TouchableOpacity
                            disabled={itemCount === 1}
                            onPress={handleDecrement}>
                            <MinusCircle
                                size={moderateScale(20)}
                                color={itemCount === 1 ? 'grey' : 'black'}
                            />
                        </TouchableOpacity>
                        <Text style={styles.count}>{itemCount}</Text>
                        <TouchableOpacity onPress={handleIncrement}>
                            <PlusCircle size={moderateScale(20)} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleDelete}>
                        <Trash
                            size={moderateScale(24)}
                            color='red'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ItemCart;
