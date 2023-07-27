import PlayerList from "./playerList";
import GenericTeamMsg from "./genericTeamMsg";
import ConstString from "../../constants/constString";

//* Player Body component

const PlayerBody = ({ team, index }: any) => {

    return (
        team.players.length > 0 ?
            <PlayerList teamIndex={index} /> :
            <GenericTeamMsg message={ConstString["Empty Team"]} />
    );
}

export default PlayerBody;