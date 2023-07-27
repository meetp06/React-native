import { useFormik } from 'formik';
import { useState, useContext } from 'react';
import { UserDetailsContext } from '../../../../contexts';
import { setUserDetailsFromLocal } from '../../../../services';
import { loginSchema } from '../../../../utils';

/*
 * Hook for managing the profile screen.
 *
 * @return - object having the formik and various onPress handlers.
 */

const useProfileInfo = () => {
    const [isAccountEditClicked, setAccountEditClicked] = useState(false);

    const { userDetails, setUserDetails } = useContext(UserDetailsContext);

    const formik = useFormik({
        initialValues: {
            email: userDetails?.email ?? '',
            password: userDetails?.password ?? '',
        },
        validationSchema: loginSchema,
        onSubmit(values) {
            const email = values.email.trim();
            const password = values.password.trim();

            const curInfo = {
                ...userDetails,
                email: email,
                password: password,
                isLoggedIn: true,
            };

            setUserDetailsFromLocal(curInfo);
            setUserDetails(curInfo);
            toggleAccountEditClicked();
        },
    });

    const toggleAccountEditClicked = () => {
        setAccountEditClicked((prev) => !prev);
        formik.setFormikState((curState) => {
            curState.errors = {};
            curState.touched = {};
            curState.submitCount = 0;
            return { ...curState };
        });
    };

    const accountCancelHandler = () => {
        formik.setValues({
            email: userDetails.email,
            password: userDetails.password,
        });

        toggleAccountEditClicked();
    };

    return {
        isAccountEditClicked,
        toggleAccountEditClicked,
        accountCancelHandler,
        formik,
    };
};

export default useProfileInfo;
