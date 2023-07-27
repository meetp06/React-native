import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES, STRINGS } from '../../../../constants';
import { signUpPending } from '../../../../redux';
import { RegisterSchema, navigationWithReplace } from '../../../../utils';

/*
 * Hook for managing the register screen.
 *
 * @return - objects consisting of formik and various onPress handlers.
 */

const useRegister = () => {
  const loadingStatus = useSelector((state) => state.user.loadingStatus);
  const error = useSelector((state) => state.user.error);
  const reduxDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstname: '',
      password: '',
      email: '',
      confirmPassword: '',
    },
    validateOnBlur: true,
    onSubmit: () => handleRegister(),
    validationSchema: RegisterSchema,
  });

  useEffect(() => {
    if (loadingStatus === STRINGS.success)
      navigationWithReplace(ROUTES.HOME_TAB);
  }, [loadingStatus]);

  useEffect(() => {
    if (error) Alert.alert(STRINGS.error, `${error}`);
  }, [error]);

  const handleRegister = () => {
    const userDetails = {
      email: formik.values.email.toLowerCase(),
      firstname: formik.values.firstname,
      meta: {
        password: formik.values.password,
      },
    };

    reduxDispatch(signUpPending(userDetails));
  };

  const login = () => {
    navigationWithReplace(ROUTES.LOGIN);
  };

  return { loadingStatus, formik, login };
};

export default useRegister;
