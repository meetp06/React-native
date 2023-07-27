//*All header part is here

import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HeaderComponent(){
    return(
<SafeAreaView>

<View style={styles.Appbar}>
    <Text style={{ padding: 10, fontSize: 25 }}>
        PhotoBayApp
    </Text>
</View>
<View style={{ height: 0.1, width: '100%', borderWidth: 0.3, borderColor: 'black' }}></View>
<View style={styles.StoryCard}>

    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View >
            <View style={styles.outerLayer}>
                <Image style={styles.ImageStyle} source={require('../assets/image/image1.jpeg')} />
            </View>
            <Text style={styles.textstyle}>Meet</Text>
        </View>

        <View>
            <View style={styles.outerLayer}>
                <Image style={styles.ImageStyle} source={require('../assets/image/image2.jpg')} />
            </View>
            <Text style={styles.textstyle}>Aaron</Text>
        </View>

        <View>
            <View style={styles.outerLayer}>
                <Image style={styles.ImageStyle} source={require('../assets/image/image3.jpg')} />
            </View>
            <Text style={styles.textstyle}>Abagnale</Text>
        </View>

        <View>
            <View style={styles.outerLayer}>
                <Image style={styles.ImageStyle} source={require('../assets/image/image4.jpg')} />
            </View>
            <Text style={styles.textstyle}>Charles</Text>
        </View>

        <View>
            <View style={styles.outerLayer}>
                <Image style={styles.ImageStyle} source={require('../assets/image/image5.jpg')} />
            </View>
            <Text style={styles.textstyle}>Julius</Text>
        </View>

        <View>
        <View style={styles.outerLayer}>
        <Image style={styles.ImageStyle} source={require('../assets/image/image6.jpg')} />
        </View>
           
            <Text style={styles.textstyle}>John</Text>
        </View>

        <View>
            <View style={styles.outerLayer}>
                <Image style={styles.ImageStyle} source={require('../assets/image/image7.jpg')} />
            </View>
            <Text style={styles.textstyle}>Milton</Text>
        </View>

        <View>
            <View style={styles.outerLayer}>
                <Image style={styles.ImageStyle} source={require('../assets/image/image8.jpg')} />
            </View>
            <Text style={styles.textstyle}>Caesar</Text>
        </View>

        <View>
            <View style={styles.outerLayer}>
                <Image style={styles.ImageStyle} source={require('../assets/image/image9.jpg')} />
            </View>
            <Text style={styles.textstyle}>Callaghan</Text>
        </View>

        <View>
            <View style={styles.outerLayer}>
                <Image style={styles.ImageStyle} source={require('../assets/image/image10.jpg')} />
            </View>
            <Text style={styles.textstyle}>Hal</Text>
        </View>

        <View>
            <View style={styles.outerLayer}>
                <Image style={styles.ImageStyle} source={require('../assets/image/image11.jpg')} />
            </View>
            <Text style={styles.textstyle}>Abbey</Text>
        </View>

        <View>
            <View style={styles.outerLayer}>
                <Image style={styles.ImageStyle} source={require('../assets/image/image12.jpg')} />
            </View>
            <Text style={styles.textstyle}>Bacevich</Text>
        </View>

    </ScrollView>

</View>
<View style={{ height: 0.1, width: '100%', borderWidth: 0.3, borderColor: 'black' }}></View>
</SafeAreaView>
    )
}


const styles = StyleSheet.create({
    Appbar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginTop: 20,
    },
    StoryCard: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    ImageStyle: {
        height: 75,
        width: 75,
        borderRadius: 50,
        marginLeft: 1.5,
        borderColor: '#008086',
        borderWidth: 2,
        padding: 30,
        margin: 6,
        alignSelf: 'center'
    },
    textstyle: {
        alignSelf: 'center',
    },
    outerLayer: {
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
        height: 82,
        width: 82,
        flexDirection: 'row',
        margin: 10
    }

})