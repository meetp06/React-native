/*
 * registerSchema for yup.
 */

import * as Yup from 'yup';
import { STRINGS } from '../../../constants';

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required(STRINGS.YupErrors.requireEmailError)
    .email(STRINGS.YupErrors.invalidEmailError),
  firstname: Yup.string().required(STRINGS.YupErrors.requireUserNameError),
  password: Yup.string()
    .required(STRINGS.YupErrors.requirePasswordError)
    .min(8, STRINGS.YupErrors.lengthPasswordError)
    .matches(/[a-z]+/, STRINGS.YupErrors.lowercasePasswordError)
    .matches(/[A-Z]+/, STRINGS.YupErrors.upperCasePasswordError),
  confirmPassword: Yup.string()
    .required(STRINGS.YupErrors.requireConfirmPasswordError)
    .oneOf([Yup.ref('password')], STRINGS.YupErrors.passwordNotMatchError),
});
