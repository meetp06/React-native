import { Text, View } from "react-native";
import CustomButton from "../utility/customButton";
import ModalHooks from '../hooks/Modal/modalHooks'
import AddTeamModal from "./teamModal";
import MainAppHeaderStyle from "../styles/mainAppHeaderStyle";
import ConstString from "../../constants/constString";

//* Main App header 

const MainAppHeader = () => {

    //* States for our add Player modal show
    const { visibleModal: teamModal, toggleModal } = ModalHooks();

    //* onPress for add button
    const add = () => {
        toggleModal();
    };

    return (
        <View style={MainAppHeaderStyle.mainView}>

            {/* //* App title */}
            <Text style={MainAppHeaderStyle.headerTextStyle}>
                {ConstString["App Name"]}
            </Text>

            {/* //* Our Add team modal component */}
            {teamModal && <AddTeamModal teamModal={teamModal} toggleModal={toggleModal} />}

            {/* //* Button for adding team */}
            <CustomButton children={'Add Team'} onPress={add} />

        </View>
    );
}

export default MainAppHeader;
