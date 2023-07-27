import { useState } from "react"

const ModalHook = () => {
    const [visibleModal, setVisibleModal] = useState(false);

    const toggleModal = () => {
        setVisibleModal(!visibleModal);
    }

    return { visibleModal, toggleModal };
}

export default ModalHook;