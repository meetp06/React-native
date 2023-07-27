import {
  CommonActions,
  DrawerActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigationCheck = (moveCallback: () => void): void => {
  if (!navigationRef.isReady()) {
    setTimeout(() => navigationCheck(moveCallback), 50);
  } else {
    moveCallback?.();
  }
};

export const navigatePop = (
  screenCount: number = 0,
  isPopToTop: boolean = false,
): void => {
  navigationCheck(() => {
    const popAction = isPopToTop
      ? StackActions.popToTop()
      : StackActions.pop(screenCount);
    navigationRef.dispatch(popAction);
  });
};

export const navigateBack = (): void => {
  navigationCheck(() => {
    const backAction = CommonActions.goBack();
    navigationRef.dispatch(backAction);
  });
};

export const toggleDrawer = (): void => {
  navigationCheck(() => {
    const toggleAction = DrawerActions.toggleDrawer();
    navigationRef.dispatch(toggleAction);
  });
};

export const navigateWithReplace = (routeName: string, params = {}): void => {
  navigationCheck(() => {
    const replaceAction = StackActions.replace(routeName, params);
    navigationRef.dispatch(replaceAction);
  });
};

export const navigateWithParam = (
  routeName: string,
  params = {},
  merge: boolean = false,
): void => {
  navigationCheck(() => {
    const navigateAction = CommonActions.navigate({
      name: routeName,
      params,
      merge,
    });
    navigationRef.dispatch(navigateAction);
  });
};

export const navigateWithPush = (routeName: string, params = {}): void => {
  navigationCheck(() => {
    const pushAction = StackActions.push(routeName, params);
    navigationRef.dispatch(pushAction);
  });
};

export const navigateWithReset = (
  stackName: string,
  routeName: string,
  params: {},
): void => {
  navigationCheck(() => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: stackName,
          state: { routes: [{ name: routeName, params }] },
        },
      ],
    });
    navigationRef.dispatch(resetAction);
  });
};
