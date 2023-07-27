import * as Yup from 'yup';
import { Strings } from '../../../constants';

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required(Strings.YupErrors.requireEmailError)
    .email(Strings.YupErrors.invalidEmailError),
  firstname: Yup.string().required(Strings.YupErrors.requireFNameError),
  password: Yup.string()
    .required(Strings.YupErrors.requirePasswordError)
    .min(8, Strings.YupErrors.lengthPasswordError)
    .matches(/[a-z]+/, Strings.YupErrors.lowercasePasswordError)
    .matches(/[A-Z]+/, Strings.YupErrors.upperCasePasswordError),
  lastname: Yup.string().required(Strings.YupErrors.requireLNameError),
});

export default RegisterSchema;
