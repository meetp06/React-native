# Ts-Assignment

# sampleProject

**Project Name**: `sampleProject`

**Bundle Id / Package Name**: `com.simform.sampleproject`

[![react-native](https://img.shields.io/badge/react--native-0.72.0-brightgreen)](https://reactnative.dev/docs/0.72/getting-started)
[![code-style](https://img.shields.io/badge/code%20style-standard%20TS-brightgreen)](https://www.typescriptlang.org/)

---

## Project Description

The application consists of two screens: the Login screen and the Movie list screen. Once the user successfully authenticates, they will be directed to the home screen where they can access the complete list of movies.

Credentials for Authentication:
email: admin@simform.com
password: Admin@123

## Prerequisites

**iOS** : XCode(14) onwards

**Android** : Android Studio(4.1) with gradle(6.2) onwards

**Editor** : Visual Studio Code

## How to Run the Project

1. Open the project directory in to terminal
2. Run and build for either OS

   - Run iOS app

     ```bash
     npm run ios
     ```

   - Run Android app

     ```bash
     npm run android
     ```

   - Note: This yarn scripts will lint your code first. If there are no lint errors, then it will run the ios or android app. Otherwise it will show the lint errors in the terminal.

## Usage

1. Install and Open app.
2. By default, It will redirected to Login Screen, if You have not Authenticated the user with given credentials.
3. You can input credential which are provided above in Project Description section.
4. After Authentication user will be redirect to Home screen in which user can able to access Popular Movies List.
5. If you have already authenticated the user previously and open the app, it will directly redirected to Home Screen where List of Popular Movies will be available.
6. In right side of the header part of the Home screen there is Logout button is available. through which user can get logout and redirected to Login Screen again.

## Coding Style used

This project adheres to JavaScript Standard for coding style. To maintain coding standards, utilizing features of ES6 and follow best development practices of react-native, this project also uses [ES6](http://es6-features.org/#Constants), some rules of [eslint-config](https://www.npmjs.com/package/@react-native-community/eslint-config), [import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript) and [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import).

**Do not disable lint inside the code. Try to understand the rule and then follow it into your code. Disabling lint will be considered a violation of coding standards. Exceptions will be allowed by the code-reviewer and team lead after understanding the need to ignore lint.**

1. **To Lint**

   Use the yarn script `lint`. To run it

```bash
  yarn lint
```

2. **Understanding Linting Errors**

   The linting rules are from JS Standard and React-Standard. [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## List of all dependencies used in the project with their usage

List all dependencies from the package.json file along with their usage. This list must be updated every time you change/add any dependecy. Here are some examples:

- **Framework:**

  - [React Native](https://github.com/facebook/react-native)

- **Navigation:**

  - [react-navigation](https://github.com/react-navigation/react-navigation),
    [react-navigation-stack](https://github.com/react-navigation/stack),
    [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context),
    [react-native-screens](https://github.com/software-mansion/react-native-screens),
    [react-navigation-drawer](https://reactnavigation.org/docs/drawer-based-navigation/),
    [react-navigation-material-bottom-tabs](https://reactnavigation.org/docs/material-bottom-tab-navigator/),
    [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler),
    [react-native-paper](https://www.npmjs.com/package/react-native-paper),
    [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated),

- **State management libraries:**

  - [Redux](http://redux.js.org/),
    [React Redux](https://react-redux.js.org/),
    [redux-persist](https://github.com/rt2zz/redux-persist),
    [Redux Toolkit](https://redux-toolkit.js.org/),
    [Redux-saga](https://redux-saga.js.org/docs/introduction/GettingStarted)

- **For Api:**

  - [axios](https://github.com/axios/axios)

- **Storage:**

  - [react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)

- **For Validations:**

  - [formik](https://github.com/jaredpalmer/formik),
    [yup](https://github.com/jquense/yup)

- **For Permission:**

  - [react-native-permissions](https://www.npmjs.com/package/react-native-permissions)

- **For Notification:**

  - [notifee/react-native](https://notifee.app/react-native/docs/overview)

- **For Utilities:**

  - [react-native-splash-screen](https://www.npmjs.com/package/react-native-splash-screen),
    [react-native-svg](https://www.npmjs.com/package/react-native-svg),
    [phosphor-react-native](https://www.npmjs.com/package/phosphor-react-native),
    [react-native-image-picker](https://github.com/react-native-image-picker/react-native-image-picker),
    [react-native-video](https://www.npmjs.com/package/react-native-video),
    [react-native-webview](https://www.npmjs.com/package/react-native-webview)
