import { Image, View } from "react-native";
import CircularImageStyle from "../styles/circularImageStyle";

//* Solo circular image component

const CircularImage = ({ src }: any) => {

    return (
        <View style={CircularImageStyle.root}>
            <View style={[CircularImageStyle.imageContainer]}>
                <Image
                    style={[CircularImageStyle.image]}
                    source={src}
                    resizeMode={"cover"}
                />
            </View>
        </View>
    );
}



export default CircularImage;