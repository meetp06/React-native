import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DropDownStyle from '../styles/dropDownComponentStyle';

//* Drop down Componenet which we will use for Batsmen type 

const DropdownInput = ({ selectedValue, setSelectedValue, isEdit }: any) => {

    //* Our list Expanded tracking variables
    const [isExpanded, setIsExpanded] = useState(false);

    //* Toggling the states
    const toggleDropdown = () => {
        if (!isEdit)
            return;

        setIsExpanded(!isExpanded);
    };

    //* On press for tapping the item view
    const handleItemPress = (itemValue: any) => {
        setSelectedValue(itemValue);
        setIsExpanded(false);
    };

    return (
        <>

            {/* //* Our text box which will show selected type and onTap will open dropdown */}
            <TouchableOpacity
                onPress={toggleDropdown}
                style={[DropDownStyle.dropdownContainer, isExpanded && DropDownStyle.dropdownContainerExpanded,]}
            >
                <Text style={{ color: 'black' }}>{selectedValue}</Text>

                <TouchableOpacity onPress={toggleDropdown}>
                    <Text style={DropDownStyle.dropdownIcon}>{isExpanded ? '-' : '+'}</Text>
                </TouchableOpacity>

            </TouchableOpacity>

            {/* //* Expanded comnponent which will be seen as dropDown */}
            {isExpanded && (
                <View style={DropDownStyle.dropdownList}>

                    <TouchableOpacity
                        onPress={() => handleItemPress('All rounder')}
                        style={DropDownStyle.dropdownItem}
                    >
                        <Text>All rounder</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleItemPress('Batsman')}
                        style={DropDownStyle.dropdownItem}
                    >
                        <Text>Batsman</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleItemPress('Bowler')}
                        style={DropDownStyle.dropdownItem}
                    >
                        <Text>Bowler</Text>
                    </TouchableOpacity>

                </View>
            )}

        </>
    );
};

export default DropdownInput;
