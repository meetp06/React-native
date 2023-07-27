import { useContext } from "react";
import TeamContext from "../hooks/Team/teamContext";
import GenericTeamMsg from "./genericTeamMsg";
import ConstString from "../../constants/constString";
import TeamList from "./teamList";

//* Main app body component

const MainAppBody = () => {

    const { teamArray } = useContext(TeamContext) as any;

    return (
        teamArray.length ?
            <TeamList /> :
            <GenericTeamMsg message={ConstString["No Team"]} />
    );
}

export default MainAppBody;