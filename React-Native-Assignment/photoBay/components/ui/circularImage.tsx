import { Image, StyleSheet, View } from "react-native";

//* Solo circular image component

const CircularImage = ({ src, style }: any) => {

    return (
        <View style={styles.root}>
            <View style={[styles.imageContainer, style]}>
                <Image
                    style={[styles.image, style]}
                    source={src}
                    resizeMode={"cover"}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    root: {
        padding: 5,
    },

    imageContainer: {
        borderWidth: 3,
        borderRadius: 100,
        padding: 1,
        borderColor: 'brown',
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },

});

export default CircularImage;