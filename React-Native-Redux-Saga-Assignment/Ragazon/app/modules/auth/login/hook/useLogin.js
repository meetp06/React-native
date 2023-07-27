import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES, STRINGS } from '../../../../constants';
import { loginPending } from '../../../../redux';
import { loginSchema, navigationWithReplace } from '../../../../utils';

/*
 * Hook for managing the login screen.
 *
 * @return - objects consisting of formik and various onPress handlers.
 */

const useLogin = () => {
  const loadingStatus = useSelector((state) => state.user.loadingStatus);
  const error = useSelector((state) => state.user.error);
  const reduxDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    onSubmit: () => handleLogin(),
    validationSchema: loginSchema,
  });

  useEffect(() => {
    if (error) Alert.alert('Error', `${error}`);
  }, [error]);

  useEffect(() => {
    if (loadingStatus === STRINGS.success)
      navigationWithReplace(ROUTES.HOME_TAB);
  }, [loadingStatus]);

  const handleLogin = () => {
    const userDetails = {
      email: formik.values.email.toLowerCase(),
      password: formik.values.password,
    };

    reduxDispatch(loginPending(userDetails));
  };

  const register = () => {
    navigationWithReplace(ROUTES.REGISTER);
  };

  return { loadingStatus, formik, register };
};

export default useLogin;
