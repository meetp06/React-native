import { ScrollView, Text, View } from 'react-native';
import { HouseLine, Package, SignOut, User } from 'phosphor-react-native';
import { applicationStyles, moderateScale } from '../../../theme';
import { ROUTES } from '../../../constants';
import { CircularImage } from '../..';
import { Images } from '../../../assets';
import styles from './DrawerItemStyles';
import { DrawerBox } from '../drawer_box';
import { useDrawer } from '../hooks';
import { useContext } from 'react';
import { DrawerContext } from '../../../contexts';

/*
 * Custom drawer.
 *
 * @return - custom drawer view.
 */

const CustomDrawerItem = () => {
    const {
        userName,
        email,
        handleHome,
        handleProfile,
        handleAccount,
        handleLogOut,
    } = useDrawer();
    const { drawerSelected } = useContext(DrawerContext);

    return (
        <View style={applicationStyles.screen}>
            <View style={styles.profileContainer}>
                <CircularImage src={Images.profile} />
                <View style={styles.profileTextContainer}>
                    <Text style={styles.profileNameStyle}>{userName}</Text>
                    <Text style={styles.profileEmailStyle}>{email}</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <ScrollView style={styles.scrollView}>
                <DrawerBox
                    icon={
                        <HouseLine
                            size={moderateScale(28)}
                            weight={
                                drawerSelected === ROUTES.HomeTab
                                    ? 'duotone'
                                    : 'light'
                            }
                            color={
                                drawerSelected === ROUTES.HomeTab
                                    ? 'white'
                                    : 'black'
                            }
                        />
                    }
                    isFocused={drawerSelected === ROUTES.HomeTab}
                    title={'Home'}
                    onPress={handleHome}
                />
                <DrawerBox
                    icon={
                        <User
                            size={moderateScale(28)}
                            weight={
                                drawerSelected === ROUTES.Profile
                                    ? 'duotone'
                                    : 'light'
                            }
                            color={
                                drawerSelected === ROUTES.Profile
                                    ? 'white'
                                    : 'black'
                            }
                        />
                    }
                    isFocused={drawerSelected === ROUTES.Profile}
                    title={'Profile'}
                    onPress={handleProfile}
                />
                <DrawerBox
                    icon={
                        <Package
                            size={moderateScale(28)}
                            weight={
                                drawerSelected === ROUTES.Account
                                    ? 'duotone'
                                    : 'light'
                            }
                            color={
                                drawerSelected === ROUTES.Account
                                    ? 'white'
                                    : 'black'
                            }
                        />
                    }
                    isFocused={drawerSelected === ROUTES.Account}
                    title={'Account'}
                    onPress={handleAccount}
                />
            </ScrollView>
            <DrawerBox
                icon={
                    <SignOut
                        size={moderateScale(28)}
                        weight='light'
                    />
                }
                title={'Sign out'}
                onPress={handleLogOut}
            />
        </View>
    );
};

export default CustomDrawerItem;
