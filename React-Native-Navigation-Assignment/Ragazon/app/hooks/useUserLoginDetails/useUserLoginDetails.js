import { useState } from 'react';

/*
 * Hook for storing the userDetails.
 *
 * @return - user details and its updater function.
 */

const useUserLoginDetails = () => {
    const [userLoginDetails, setUserLoginDetails] = useState({});

    return [userLoginDetails, setUserLoginDetails];
};

export default useUserLoginDetails;
