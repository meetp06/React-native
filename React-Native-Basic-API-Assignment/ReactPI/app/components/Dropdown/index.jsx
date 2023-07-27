/*
 * Drop down component.
 *
 * @params selectedValue of the dropdown.
 * @params setSelectedValue is the updater functions for selectedValue
 * @params isEdit which denotes if the dropdown is clickable or not.
 * @params listOfOptions which denotes the list of options.
 * @params scrollEnabled for enabling the scrolling.
 * @return dropdown component which is used to show dropdown list of options.
 */

import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import dropDownStyle from './DropDownStyle';

const DropdownInput = ({
    selectedValue,
    setSelectedValue,
    isEdit,
    listOfOptions,
    scrollEnabled,
}) => {
    //* Our list Expanded tracking variables
    const [isExpanded, setIsExpanded] = useState(false);

    //* Toggling the states
    const toggleDropdown = () => {
        if (!isEdit) return;

        setIsExpanded(!isExpanded);
    };

    //* On press for tapping the item view
    const handleItemPress = (itemValue, index) => {
        setSelectedValue({ value: itemValue, index: index });
        setIsExpanded(false);
    };

    return (
        <>
            <TouchableOpacity
                onPress={toggleDropdown}
                style={[
                    dropDownStyle.dropdownContainer,
                    isExpanded && dropDownStyle.dropdownContainerExpanded,
                ]}>
                <Text style={{ color: 'black' }}>{selectedValue.value}</Text>
                <TouchableOpacity onPress={toggleDropdown}>
                    <Text style={dropDownStyle.dropdownIcon}>
                        {isExpanded ? '-' : '+'}
                    </Text>
                </TouchableOpacity>
            </TouchableOpacity>
            {isExpanded ? (
                <View style={[dropDownStyle.dropdownList, dropDownStyle.flex]}>
                    <FlatList
                        data={listOfOptions}
                        scrollEnabled={scrollEnabled ? true : false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() =>
                                        handleItemPress(
                                            item.name ?? item,
                                            index
                                        )
                                    }
                                    style={dropDownStyle.dropdownItem}>
                                    <Text>{item.name ?? item}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            ) : null}
        </>
    );
};

export default DropdownInput;
