
export const addTeam = (teamName: any, teamArray: any, setTeamArray: any) => {
    teamArray.push({ name: teamName, players: [] });
    setTeamArray(() => [...teamArray]);
};

export const updateTeam = (index: any, newName: any, teamArray: any, setTeamArray: any) => {

    const newArray = teamArray.map(({ name, players }: any, curIndex: any) => {

        if (curIndex === index) {
            return { name: newName, players: players };
        } else {
            return { name: name, players: players }
        }
    });

    setTeamArray(() => newArray);
}

export const resetTeam = (teamArray: any, setTeamArray: any) => {
    setTeamArray([]);
};

export const addTeamPlayer = (index: any, player: any, teamArray: any, setTeamArray: any) => {

    const newArray = teamArray.map(({ name, players }: any, curIndex: any) => {

        if (curIndex === index) {
            const pArray = [...players, player];
            return { name: name, players: pArray };
        } else {
            return { name: name, players: players }
        }
    });

    setTeamArray(() => newArray);
};

export const updateTeamPlayer = (teamIndex: any, playerIndex: any, updatePlayer: any, teamArray: any, setTeamArray: any) => {

    const newArray = teamArray.map(({ name, players }: any, curIndex: any) => {

        if (curIndex === teamIndex) {

            const pArray = players.map((value: any, index: any) => {
                if (index == playerIndex)
                    return updatePlayer;

                else
                    return value;
            });

            return { name: name, players: pArray };
        } else {
            return { name: name, players: players }
        }
    });

    setTeamArray(() => newArray);
};

export const deleteTeamPlayer = (teamIndex: any, playerIndex: any, teamArray: any, setTeamArray: any) => {

    const newArray = teamArray.map(({ name, players }: any, curIndex: any) => {

        if (curIndex === teamIndex) {
            const pArray = players.filter((value: any, index: any) => index !== playerIndex);
            return { name: name, players: pArray };
        } else {
            return { name: name, players: players }
        }
    });

    setTeamArray(() => newArray as never);
};

export const deleteTeam = (teamIndex: any, teamArray: any, setTeamArray: any) => {
    teamArray.splice(teamIndex, 1);
    setTeamArray(() => [...teamArray]);
}