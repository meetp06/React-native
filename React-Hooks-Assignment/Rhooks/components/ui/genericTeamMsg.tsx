import { Image, Text, View } from "react-native";
import GenericMsgStyle from "../styles/genericMsgStyle";

const imgSource = require('../../assets/nothing.png');

//* generic view for our empty components for teamList and playerList both

const GenericTeamMsg = ({ message }: any) => {
    return (
        <View style={GenericMsgStyle.mainView}>
            <View style={GenericMsgStyle.box} >

                <Image
                    source={imgSource}
                    resizeMode={"contain"}
                    style={GenericMsgStyle.iconStyle}
                />

                <Text style={GenericMsgStyle.textStyle}>
                    {message}
                </Text>
            </View>
        </View>
    );
}

export default GenericTeamMsg;