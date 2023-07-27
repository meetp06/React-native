import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import GIF from '../../assets/gif';
import Color from '../../theme/Colors';
import styles from './CustomDrawerStyles';

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: Color.SecondaryColorA}}>
        <Image style={styles.headerGif} source={GIF.DrawerGif} />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <View style={styles.horizontalline} />
        <Text style={styles.osName}>
          OS Type: {Platform.OS.toLocaleUpperCase()}
        </Text>
        <View style={styles.osVersionView}>
          <Text style={styles.osVersion}>OS Version:</Text>
          <Text style={styles.versionInfo}>{Platform.Version}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
