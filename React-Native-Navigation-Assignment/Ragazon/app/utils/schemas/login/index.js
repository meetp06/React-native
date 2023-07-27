/*
 * loginSchema for yup.
 */

import * as Yup from 'yup';
import { STRINGS } from '../../../constants';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .required(STRINGS.YupErrors.requireEmailError)
        .email(STRINGS.YupErrors.invalidEmailError),
    password: Yup.string()
        .required(STRINGS.YupErrors.requirePasswordError)
        .min(8, STRINGS.YupErrors.lengthPasswordError)
        .matches(/[a-z]+/, STRINGS.YupErrors.lowercasePasswordError)
        .matches(/[A-Z]+/, STRINGS.YupErrors.upperCasePasswordError)
        .matches(/[@$!%*#?&]+/, STRINGS.YupErrors.specialCasePasswordError)
        .matches(/\d+/, STRINGS.YupErrors.digitPasswordError),
});
