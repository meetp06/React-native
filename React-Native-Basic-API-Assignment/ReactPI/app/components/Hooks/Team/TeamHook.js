/*
 * Team Hook which stores the array of team which will be inside the global context.
 *
 * @params none.
 * @return object having teamArray and updater function setTeamArray.
 */

import { useState } from 'react';

const TeamHook = () => {
    const [teamArray, setTeamArray] = useState([]);

    return { teamArray, setTeamArray };
};

export default TeamHook;
