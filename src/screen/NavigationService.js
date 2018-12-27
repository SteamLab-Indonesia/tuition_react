// NavigationService.js

import { NavigationActions } from 'react-navigation';

let _navigator;
let _drawer;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function setTopLevelDrawer(drawerRef) {
  _drawer = drawerRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName,
      params,
    })
  );
}

function navigateDrawer(routeName, params) {
  _drawer.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName,
      params,
    })
  );
}
// add other navigation functions that you need and export them

export default {
  navigate,
  navigateDrawer,
  setTopLevelNavigator,
  setTopLevelDrawer
};