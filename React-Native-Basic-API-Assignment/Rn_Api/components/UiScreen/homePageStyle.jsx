//*Home Page Style
import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create(
    {
        headerBox: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        headingBorderStyle: {
            fontSize: 21,
            color: 'black',
            borderColor: 'rgb(232, 181, 202)',
            borderRadius: 20,
            borderWidth: 1,
            height: 35,
            width: 165,
            paddingLeft: 5,
            paddingTop: 2
        },
        drawerBorder: {
            borderColor: 'white',
            borderRadius: 30,
            borderWidth: 1.5,
            height: 40,
            width: 40
        },
        dialogBox: {
            backgroundColor: 'rgb(215, 217, 222)',
            borderRadius: 30,
            margin: 11,
        },
        dialogBoxButton: {
            color: 'white',
            fontSize: 17.5,
            marginBottom: 10,
            margin: 5,
            marginLeft: 23
        },
        headerBackgroundColorStyle: {
            borderRadius: 15,
            borderWidth: 1,
            backgroundColor: Platform.OS === 'ios' ? "#8D9EFF" : "#3B185F",
            width: 130,
            paddingTop: 2,
            marginBottom: 5
        },
        drawer: {
            height: 20,
            width: 20,
            tintColor: 'white',
            margin: 5
        },
        teamNameStyle: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: 20,
            backgroundColor: 'rgb(225, 229, 240)',
            borderRadius: 50,
            padding: 12,
            borderColor: 'black',
            borderWidth: 0.5,
        },
        appNameStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20
        },
        buttonBarStyle: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            margin: 5,
        },
        appStateStyle: {
            borderRadius: 50,
            borderWidth: 2,
            borderColor: 'black',
            height: 45,
            width: 45
        },
        inlineAppstateStyle: {
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'center',
        },
        bodyPart: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1
        },
        insideBodyPart: {
            flex: 100
        },
        openWebsite: {
            flex: 8
        }
    },
)

export default styles;