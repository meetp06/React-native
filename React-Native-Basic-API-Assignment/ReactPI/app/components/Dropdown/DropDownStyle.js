import { StyleSheet } from 'react-native';

const dropDownStyle = StyleSheet.create({
    dropdownContainer: {
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 22,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    dropdownContainerExpanded: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },

    dropdownIcon: {
        fontSize: 16,
        marginLeft: 10,
    },

    dropdownList: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginTop: 5,
    },

    flex: {
        flex: 1,
    },

    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default dropDownStyle;
