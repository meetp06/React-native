//* Main body file is here

import React, { Component } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import userData from '../ui_components/userData';

export default function BodyPart() {
    const ItemView = ({ item }) => {

        return (
            <SafeAreaView style={styles.BodyStyle}>
                <View >
                    <View style={styles.imageCornerStyle}>
                        <View style={styles.userStyle}>
                            <Image source={item.url} style={styles.userIconStyle} />
                        </View>

                        <View>
                            <Text style={styles.NameStyle}>{item.name}</Text>
                            <Text style={styles.LocationStyle}>{item.location}</Text>
                        </View>
                    </View>

                    <View style={styles.photoStyle}>
                        <View style={styles.innerStyleOne}>
                            <Image source={{ uri: item.post_url }} style={styles.BodyImageStyle} />
                        </View>

                        <View style={styles.innerStyleTwo}>
                            <Image source={require('../assets/icon/threedot.png')} style={{ height: 20, width: 20, tintColor: 'black' }} />
                        </View>
                    </View>

                    <View style={styles.iconBoxStyle}>

                        <View style={styles.multiIcon}>
                            <Image source={require('../assets/icon/like.png')} style={{ height: 25, width: 30, tintColor: 'black', marginTop: 7 }} />
                            <Image source={require('../assets/icon/share.png')} style={{ height: 40, width: 30, marginLeft: 8 }} />
                            <Image source={require('../assets/icon/comment.png')} style={{ height: 42, width: 33, marginLeft: 8 }} />
                        </View>

                        <View style={styles.singleIcon}>
                            <Image source={require('../assets/icon/save.png')} style={{ height: 50, width: 40 }} />
                        </View>

                    </View>
                    
                </View>
            </SafeAreaView>
        );
    };
    return (< FlatList
        data={userData}
        renderItem={ItemView}
        contentContainerStyle={{ paddingBottom: 250 }}
        ItemSeparatorComponent={ () => <View style={{ height: 1, borderWidth: 0.3, backgroundColor: 'black' }}></View>}
        showsVerticalScrollIndicator={false}
    />
    );
}

const styles = StyleSheet.create({
    photoStyle: {
        flexDirection: 'row',
    },
    BodyImageStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        height: 300,
        width: '100%',
        padding: 10,
        alignContent: 'center',
        alignContent: 'space-around',
    },
    BodyStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    NameStyle: {
        fontSize: 17,
        letterSpacing: 0.8,
        textTransform: 'uppercase',
        textDecorationStyle: 'solid',
    },
    LocationStyle: {
        fontSize: 15,
    },
    iconBoxStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 7,
    },
    multiIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start'
    },
    singleIcon: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    innerStyleOne: {
        flexDirection: 'row'
    },
    innerStyleTwo: {
        flexDirection: 'row',
        position: 'absolute',
        padding: 10,

    },
    photoStyle: {
        flexDirection: 'row-reverse',

    },
    userIconStyle: {
        height: 50,
        width: 50,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'pink',

    },
    imageCornerStyle: {
        flexDirection: 'row',
        padding: 10,
        marginRight: 10,

    },
    userStyle: {
        height: 50,
        width: 60,

    },
})



