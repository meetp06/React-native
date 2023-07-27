/*
 * Main App Body component which will show the corresponding screen based
 * on the teamArray length.
 *
 * @params none.
 * @return Team list component or Generic team msg component.
 */

import { memo, useContext } from 'react';
import { FlatList } from 'react-native';
import Strings from '../../../constants/Strings';
import TeamContext from '../../Hooks/Team/TeamContext';
import EmptyComponent from '../../EmptyComponent';
import TeamItem from '../TeamItem';

const TeamListBody = () => {
    const { teamArray } = useContext(TeamContext);

    return (
        <FlatList
            data={teamArray}
            ListEmptyComponent={<EmptyComponent message={Strings.noTeam} />}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <TeamItem
                    team={item}
                    index={index}
                />
            )}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default memo(TeamListBody);
