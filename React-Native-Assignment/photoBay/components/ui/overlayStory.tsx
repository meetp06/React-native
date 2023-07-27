import { Image, Modal, Pressable, StyleSheet, View } from "react-native";

//* Enhancement regarding overlaying the story on tap

const OverlayImage = ({ src, isVisible, onHide }: any) => {

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            supportedOrientations={['portrait']}
        >

            <Pressable onPress={onHide} style={styles.overlay}>
                <View style={styles.imgContainer}>

                    {/* //* Cancel Button */}
                    <View style={styles.cancelIcon}>
                        <Pressable onPress={onHide}>
                            <Image style={styles.cancelIcon} source={require('../../assets/icons/cancel.png')} />
                        </Pressable>
                    </View>

                    {/* //* Image */}
                    <Image
                        resizeMode="cover"
                        source={src}
                        style={styles.overlayStory}
                    />

                </View>
            </Pressable>

        </Modal >
    );
}

const styles = StyleSheet.create({

    overlay: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    overlayStory: {
        width: '95%',
        height: 'auto',
        aspectRatio: 14 / 9,
        borderRadius: 32,
    },

    cancelIcon: {
        alignSelf: 'flex-end',
        width: 35,
        height: 35,
        marginBottom: 5,
    },

    imgContainer: {
        padding: 10,
        borderRadius: 32,
        backgroundColor: 'white',
    },

    cancelImg: {
        width: '100%',
        height: 'auto',
        aspectRatio: 14 / 9,
    },
});


export default OverlayImage;