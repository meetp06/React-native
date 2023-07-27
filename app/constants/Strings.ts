const Strings = {
  success: 'success',
  pending: 'pending',
  idle: 'idle',
  failed: 'failed',
  YupErrors: {
    requireEmailError: 'Email is required field!!',
    invalidEmailError: 'Email is invalid!!',
    invalidPasswordError: 'Password is invalid!!',
    requirePasswordError: 'Password is required field!!',
    lengthPasswordError: 'Password length must be atleast 8!!',
    lowercasePasswordError:
      'Password must have atleast 1 lowercase character!!',
    upperCasePasswordError:
      'Password must have atleast 1 uppercase character!!',
    specialCasePasswordError:
      'Password must have atleast 1 special character!!',
    digitPasswordError: 'Password must have atleast 1 digit!!',
    requireConfirmPasswordError: 'Confirm password is required field!!',
    passwordNotMatchError: 'Passwords do not match!!',
    requireFNameError: 'First Name is required field!!',
    requireLNameError: 'Last Name is required field!!',
    onlyAlphabetsError: 'Only Alphabets allowed!!',
  },
  InsideAppStrings: {
    Or: 'Or',
    AppName: 'DashX',
    Login: 'Login',
    Signup: 'Sign up',
    LoFoText: `Don't have an account?`, //Login Footer Text
    SiFoText: `if you have an account?`, //Signup Footer Text
    FirstName: 'First name',
    LastName: 'Last name',
    Email: 'Email',
    Password: 'Password',
    Logout: 'Logout',
    AddUser: 'Add',
    UserInformation: ` Olaolu is an experienced front-end developer and UX engineer. His
    portfolio uses a vibrant and lively color palette to make it stand
    out. The website homepage clearly presents information about his
    skills and the services he offers.`,
  },
};

export default Strings;
