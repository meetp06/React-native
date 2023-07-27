import { useContext } from "react";
import { FlatList } from "react-native";
import ConstString from "../../constants/constString";
import TeamContext from "../hooks/Team/teamContext";
import GenericTeamMsg from "./genericTeamMsg";
import PlayerItem from "./playerItem";


//* PlayerList Component which will show the list of Players in current team

const PlayerList = ({ teamIndex }: any) => {
    const { teamArray } = useContext(TeamContext) as any;

    return (
        <FlatList
            data={teamArray[teamIndex].players}
            ListEmptyComponent={<GenericTeamMsg message={ConstString["Empty Team"]} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <PlayerItem player={item} index={index} teamIndex={teamIndex} />}
        />
    );
}

export default PlayerList;