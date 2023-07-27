import { Image, StyleSheet, Text, View } from 'react-native'

export default function ImagesFile(){
    return (
    <View style={styles.ImagePage}>
        <Text style={styles.TextStyle}>This is Images Page.</Text>
        <Image style={styles.ImageStyle} source={{uri:'https://images.unsplash.com/photo-1674560965922-d9f460ec55de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}} />
    </View>)
}

const styles = StyleSheet.create({
    ImagePage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextStyle: {
        fontSize: 20,
        marginTop: 50,
    },
    ImageStyle: {
        marginTop: 40,
        height:200,
        width: 200,
    }

})