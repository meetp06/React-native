const REGEX = {
  EmailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
  PasswordRegex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
  OnlyAlpha: /^[A-Za-z]+$/,
};

export default REGEX;
