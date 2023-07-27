//*Home Page Style

import { StyleSheet } from "react-native";

    const styles = StyleSheet.create(
        {
            headerBox: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
            },
            headingBorderStyle: {
                fontSize: 25,
                color: 'white',
                borderColor: 'rgb(232, 181, 202)',
                borderRadius: 20,
                borderWidth: 1,
                height: 40,
                width: 190,
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
                margin: 20,
            },
            dialogBoxButton: {
                color: 'rgb(11, 107, 214)',
                fontSize: 19,
                marginBottom: 10
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
                margin: 30,
                backgroundColor: 'rgb(225, 229, 240)',
                borderRadius: 50,
                padding: 15,
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

        },
    )

export default styles;