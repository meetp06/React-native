export default REGEX = {
    EmailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
    PasswordRegex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
    PhoneRegex: /^[0-9]{10}$/,
    OnlyAlpha: /^[A-Za-z]+$/,
};
