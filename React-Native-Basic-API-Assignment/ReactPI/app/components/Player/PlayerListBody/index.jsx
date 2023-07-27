/*
 * Player Body component.
 *
 * @params team - a object having team name and player array.
 * @params teamIndex - index of the team.
 * @return playerlist or generic team msg.
 */

import { FlatList } from 'react-native';
import Strings from '../../../constants/Strings';
import PlayerItem from '../PlayerItem';
import EmptyComponent from '../../EmptyComponent';

const PlayerListBody = ({ team, teamIndex }) => {
    return (
        <FlatList
            data={team.players}
            ListEmptyComponent={<EmptyComponent message={Strings.emptyTeam} />}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, Playerindex) => Playerindex.toString()}
            renderItem={({ item, index }) => {
                return (
                    <PlayerItem
                        player={item}
                        index={index}
                        teamIndex={teamIndex}
                    />
                );
            }}
        />
    );
};

export default PlayerListBody;
