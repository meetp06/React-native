/*
 * Modal Hook component which can be used for modal visibility
 *
 * @params none.
 * @return object having visibleModal state and setVisibileModal updater function.
 */

import { useState } from 'react';

const useModalHook = () => {
    const [visibleModal, setVisibleModal] = useState(() => false);

    const toggleModal = () => {
        setVisibleModal(!visibleModal);
    };

    return [visibleModal, toggleModal];
};

export default useModalHook;
