import { useContext } from "react";
import { FlatList } from "react-native";
import TeamContext from "../hooks/Team/teamContext";
import TeamItem from "./teamItem";

//* Team list component

const TeamList = () => {
    const { teamArray } = useContext(TeamContext) as any;

    return (
        <FlatList
            data={teamArray}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => <TeamItem team={item} index={index} />}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

export default TeamList;