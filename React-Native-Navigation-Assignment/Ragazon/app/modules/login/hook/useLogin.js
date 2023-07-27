import { useFormik } from 'formik';
import { Keyboard } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { ROUTES } from '../../../constants';
import { UserDetailsContext } from '../../../contexts';
import { setUserDetailsFromLocal } from '../../../services';
import { loginSchema, navigationWithReplace } from '../../../utils';

/*
 * Hook for managing the login screen.
 *
 * @return - objects consisting of formik and various onPress handlers.
 */

const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateOnBlur: true,
        onSubmit: () => setIsLoading(() => true),
        validationSchema: loginSchema,
    });

    const { setUserDetails } = useContext(UserDetailsContext);

    useEffect(() => {
        if (!isLoading) return;

        Keyboard.dismiss();

        const email = formik.values.email;
        const password = formik.values.password;

        const newUserLoginDetails = {
            email: email?.trim(),
            password: password?.trim(),
            isLoggedIn: true,
        };

        setUserDetailsFromLocal(newUserLoginDetails);
        setUserDetails(newUserLoginDetails);

        setTimeout(() => {
            setIsLoading(() => false);
            navigationWithReplace(ROUTES.Drawer);
        }, 0);
    }, [isLoading]);

    return { isLoading, formik };
};

export default useLogin;
