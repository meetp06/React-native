import { useContext } from 'react';
import { FlatList } from 'react-native';
import { EmptyComponent } from '../../../../components';
import { Images } from '../../../../assets';
import { CartContext } from '../../../../contexts';
import { CartItem } from '../cart_item';

/*
 * List of cart items.
 *
 * @return - cart list.
 */

const ListCart = () => {
    const { cartList } = useContext(CartContext);

    return (
        <FlatList
            ListEmptyComponent={
                <EmptyComponent
                    src={Images.emptyCart}
                    message={undefined}
                />
            }
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            data={cartList}
            renderItem={({ item, index }) => (
                <CartItem
                    item={item}
                    index={index}
                />
            )}
        />
    );
};

export default ListCart;
