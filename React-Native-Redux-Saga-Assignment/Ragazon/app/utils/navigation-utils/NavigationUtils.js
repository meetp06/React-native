/*
 * List of functions for the navigation purposes.
 *
 */

import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const navigationCheck = (moveCallback) => {
  if (!navigationRef.isReady()) {
    setTimeout(() => navigationCheck(moveCallback), 50);
  } else {
    moveCallback?.();
  }
};

const navigationPop = (screenCount, isPopToTop = false) => {
  navigationCheck(() => {
    const popAction = isPopToTop
      ? StackActions.popToTop()
      : StackActions.pop(screenCount);

    navigationRef.dispatch(popAction);
  });
};

const navigateBack = () => {
  navigationCheck(() => {
    const backAction = CommonActions.goBack();
    navigationRef.dispatch(backAction);
  });
};

const navigationWithReplace = (routeName, params = {}) => {
  navigationCheck(() => {
    const replaceAction = StackActions.replace(routeName, params);
    navigationRef.dispatch(replaceAction);
  });
};

const navigationWithParam = (routeName, params = {}, merge) => {
  navigationCheck(() => {
    const navigateAction = CommonActions.navigate({
      name: routeName,
      params,
      merge,
    });

    navigationRef.dispatch(navigateAction);
  });
};

const navigateWithPush = (routeName, params = {}) => {
  navigationCheck(() => {
    const pushAction = StackActions.push(routeName, params);
    navigationRef.dispatch(pushAction);
  });
};

const navigateWithReset = (stackName, routeName, params = {}) => {
  navigationCheck(() => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params: params,
        },
      ],
    });

    navigationRef.dispatch(resetAction);
  });
};

export {
  navigationRef,
  navigationPop,
  navigateBack,
  navigationWithReplace,
  navigationWithParam,
  navigateWithPush,
  navigateWithReset,
};
