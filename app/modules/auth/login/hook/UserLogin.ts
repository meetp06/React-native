import {useFormik} from 'formik';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RouteNames} from '../../../../constants';
import {useAppDispatch} from '../../../../constants/ConstHooks';
import {fetchUserIsFulfilled} from '../../../../redux/user/UserSlice';
import {navigateWithReplace} from '../../../../utils';
import RegisterSchema from '../../../../utils/schemas/register';

const useLogin = () => {
  const loadingStatus = useSelector(({state}) => state?.user?.loadingStatus);
  const dispatch = useAppDispatch();
  const formik: any = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    // onSubmit: () => handleLogin(),
    onSubmit: (values, {resetForm}) => {
      // Access the "stackname" parameter here
      navigateWithReplace(RouteNames.RootPage);

      // Dispatch your form submission action
      dispatch(fetchUserIsFulfilled(values));

      // Reset the form
      resetForm();
    },
    validationSchema: RegisterSchema,
  });

  useEffect(() => {
    if (loadingStatus === 'load/success')
      navigateWithReplace(RouteNames.RootPage);
  }, [loadingStatus]);

  const handleLogin = () => {
    const userDetails = {
      email: formik.values.email.toLowerCase(),
      password: formik.values.password,
    };

    dispatch(fetchUserIsFulfilled(userDetails));
  };

  return {formik};
};

export default useLogin;
