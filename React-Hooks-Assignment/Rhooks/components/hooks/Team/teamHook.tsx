import { useState } from "react";

const TeamHook = () => {
    const [teamArray, setTeamArray] = useState([]);

    return { teamArray, setTeamArray };
}

export default TeamHook;