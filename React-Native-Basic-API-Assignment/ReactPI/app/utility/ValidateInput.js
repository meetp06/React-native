import { Alert } from 'react-native';

const validateInput = (
    fName,
    lName,
    type,
    age,
    phone,
    phoneRegex,
    nMatches,
    century,
    country
) => {
    if (fName.trim().length === 0) {
        Alert.alert('Error', 'Please enter first name.');
        return false;
    }

    if (lName.trim().length === 0) {
        Alert.alert('Error', 'Please enter last name.');
        return false;
    }

    if (type.value === 'Select player type') {
        Alert.alert('Error', 'Please select player type.');
        return false;
    }

    if (age.length === 0) {
        Alert.alert('Error', "Age can't be empty.");
        return false;
    } else if (!Number(age) || Number(age) !== Math.floor(Number(age))) {
        Alert.alert('Error', 'Please enter correct age.');
        return false;
    }

    if (phone.length === 0) {
        Alert.alert('Error', "Phone number can't be empty.");
        return false;
    } else if (!phoneRegex.test(phone)) {
        Alert.alert('Error', 'Please enter correct phone number.');
        return false;
    }

    if (nMatches.length === 0) {
        Alert.alert('Error', "Matches played can't be empty.");
        return false;
    } else if (
        (!Number(nMatches) && Number(nMatches) !== 0) ||
        Number(nMatches) !== Math.floor(Number(nMatches))
    ) {
        Alert.alert('Error', 'Please enter correct matches played.');
        return false;
    }

    if (century.length === 0) {
        Alert.alert('Error', "Century can't be empty.");
        return false;
    } else if (
        (!Number(century) && Number(century) !== 0) ||
        Number(century) !== Math.floor(Number(century))
    ) {
        Alert.alert('Error', 'Please enter correct number of century.');
        return false;
    }

    if (country.trim().length === 0) {
        Alert.alert('Error', 'Please enter country name.');
        return false;
    }

    return true;
};

export default validateInput;
