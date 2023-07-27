import {useFormik} from 'formik';
import RegisterSchema from '../../../../utils/schemas/register';

const useRegister = () => {
  const formik: any = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    validateOnBlur: true,
    onSubmit: () => console.log('signup'),
    validationSchema: RegisterSchema,
  });

  return {formik};
};

export default useRegister;
