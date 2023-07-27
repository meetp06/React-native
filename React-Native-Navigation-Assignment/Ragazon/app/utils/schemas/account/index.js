/*
 * accountSchema for yup.
 */

import * as Yup from 'yup';
import { REGEX, STRINGS } from '../../../constants';

export const accountSchema = Yup.object().shape({
    fName: Yup.string()
        .required(STRINGS.YupErrors.requireFNameError)
        .matches(REGEX.OnlyAlpha, STRINGS.YupErrors.onlyAlphabetsError),
    lName: Yup.string()
        .required(STRINGS.YupErrors.requireLNameError)
        .matches(REGEX.OnlyAlpha, STRINGS.YupErrors.onlyAlphabetsError),
    phone: Yup.string()
        .required(STRINGS.YupErrors.requirePhoneError)
        .matches(REGEX.PhoneRegex, STRINGS.YupErrors.invalidPhoneError),
    country: Yup.string()
        .required(STRINGS.YupErrors.requireCountryError)
        .matches(REGEX.OnlyAlpha, STRINGS.YupErrors.onlyAlphabetsError),
    city: Yup.string()
        .required(STRINGS.YupErrors.requireCityError)
        .matches(REGEX.OnlyAlpha, STRINGS.YupErrors.onlyAlphabetsError),
    state: Yup.string()
        .required(STRINGS.YupErrors.requireStateError)
        .matches(REGEX.OnlyAlpha, STRINGS.YupErrors.onlyAlphabetsError),
    address: Yup.string().required(STRINGS.YupErrors.requireAddressError),
});
