import AsyncStorage from '@react-native-async-storage/async-storage';
import Strings from '../../../constants/Strings';

/*
 * Function to add a team in our array and then storing it in the Local Storage.
 *
 * @param teamName is the name of our string.
 * @param teamArray is the global array.
 * @param setTeamArray is the updater function which will set the global array.
 * @return none.
 */

export const addTeam = async (teamName, teamArray, setTeamArray) => {
    teamArray.push({ name: teamName, players: [] });
    setTeamArray(() => [...teamArray]);
    await AsyncStorage.setItem(Strings.arrayKey, JSON.stringify(teamArray));
};

/*
 * Function to update a team name and then storing it in the Local Storage.
 *
 *
 * @param index is the target of the team that needs the updation.
 * @param newName is the updated name that we want to set.
 * @param teamArray is the global array.
 * @param setTeamArray is the updater function which will set the global array.
 * @return none.
 */

export const updateTeam = async (index, newName, teamArray, setTeamArray) => {
    const newArray = teamArray.map(({ name, players }, curIndex) => {
        if (curIndex === index) {
            return { name: newName, players: players };
        } else {
            return { name: name, players: players };
        }
    });

    setTeamArray(() => newArray);
    await AsyncStorage.setItem(Strings.arrayKey, JSON.stringify(newArray));
};

/*
 * Function to reset team and then storing it in the Local Storage.
 *
 *
 * @param teamArray is the global array.
 * @param setTeamArray is the updater function which will set the global array.
 * @return none.
 */

export const resetTeam = async (teamArray, setTeamArray) => {
    setTeamArray([]);
    await AsyncStorage.setItem(Strings.arrayKey, JSON.stringify([]));
};

/*
 * Function to add a team player and then storing it in the Local Storage.
 *
 *
 * @param index is the target of the team that needs the updation.
 * @param player is the object with new info that needs to be added.
 * @param teamArray is the global array.
 * @param setTeamArray is the updater function which will set the global array.
 * @return none.
 */

export const addTeamPlayer = async (index, player, teamArray, setTeamArray) => {
    const newArray = teamArray.map(({ name, players }, curIndex) => {
        if (curIndex === index) {
            const pArray = [...players, player];
            return { name: name, players: pArray };
        } else {
            return { name: name, players: players };
        }
    });

    setTeamArray(() => newArray);
    await AsyncStorage.setItem(Strings.arrayKey, JSON.stringify(newArray));
};

/*
 * Function to update a team player name and then storing it in the Local Storage.
 *
 *
 * @param teamIndex is the target of the team in which player is there.
 * @param playerIndex is the target of the player that needs the updation.
 * @param updatePlayer is the updated object of the player.
 * @param teamArray is the global array.
 * @param setTeamArray is the updater function which will set the global array.
 * @return none.
 */

export const updateTeamPlayer = async (
    teamIndex,
    playerIndex,
    updatePlayer,
    teamArray,
    setTeamArray
) => {
    const newArray = teamArray.map(({ name, players }, curIndex) => {
        if (curIndex === teamIndex) {
            players[playerIndex] = updatePlayer;
        }
        return { name: name, players: players };
    });

    setTeamArray(() => newArray);
    await AsyncStorage.setItem(Strings.arrayKey, JSON.stringify(newArray));
};

/*
 * Function to delete a team player and then storing it in the Local Storage.
 *
 *
 * @param teamIndex is the target of the team in which player is there.
 * @param playerIndex is the target of the player that needs the deletion.
 * @param teamArray is the global array.
 * @param setTeamArray is the updater function which will set the global array.
 * @return none.
 */

export const deleteTeamPlayer = async (
    teamIndex,
    playerIndex,
    teamArray,
    setTeamArray
) => {
    const newArray = teamArray.map(({ name, players }, curIndex) => {
        if (curIndex === teamIndex) {
            const pArray = players.filter(
                (value, index) => index !== playerIndex
            );
            return { name: name, players: pArray };
        } else {
            return { name: name, players: players };
        }
    });

    setTeamArray(() => newArray);
    await AsyncStorage.setItem(Strings.arrayKey, JSON.stringify(newArray));
};

/*
 * Function to delete a team and then storing it in the Local Storage.
 *
 *
 * @param teamIndex is the target of the team in which player is there.
 * @param teamArray is the global array.
 * @param setTeamArray is the updater function which will set the global array.
 * @return none.
 */

export const deleteTeam = async (teamIndex, teamArray, setTeamArray) => {
    teamArray.splice(teamIndex, 1);
    setTeamArray(() => [...teamArray]);
    await AsyncStorage.setItem(Strings.arrayKey, JSON.stringify(teamArray));
};
