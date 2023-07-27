import { useFormik } from 'formik';
import { useState, useContext } from 'react';
import { UserDetailsContext } from '../../../../contexts';
import { setUserDetailsFromLocal } from '../../../../services';
import { accountSchema } from '../../../../utils';

/*
 * Hook for managing the state of the form.
 *
 * @return - object having various formik and various things.
 */

const useDeliveryInfo = () => {
    const [isEditClicked, setEditClicked] = useState(false);
    const { userDetails, setUserDetails } = useContext(UserDetailsContext);

    const formik = useFormik({
        initialValues: {
            ...userDetails,
        },
        validationSchema: accountSchema,
        onSubmit(values) {
            const curInfo = {
                ...userDetails,
                ...values,
            };

            setUserDetailsFromLocal(curInfo);
            setUserDetails(curInfo);
            toggleEditClicked();
        },
    });

    const toggleEditClicked = () => {
        setEditClicked((prev) => !prev);
        formik.setFormikState((curState) => {
            curState.errors = {};
            curState.touched = {};
            curState.submitCount = 0;
            return { ...curState };
        });
    };

    const cancelHandler = () => {
        formik.setValues({ ...userDetails });
        toggleEditClicked();
    };

    return { isEditClicked, cancelHandler, toggleEditClicked, formik };
};

export default useDeliveryInfo;
