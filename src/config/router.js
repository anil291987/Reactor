/* @flow */

import {
  StackNavigator,
  NavigationActions,
  DrawerNavigator
} from "react-navigation";

import Home from "../components/home";
import Settings from "../components/settings";
import Login from "../components/login";
import ForgotPassword from "../components/forgotpassword";

import DrawerContainer from "../components/drawer";

const HomeItem = StackNavigator({
  Home: {
    screen: Home
  }
});

const SettingsItem = StackNavigator({
  Settings: {
    screen: Settings
  }
});

export const MainStack = DrawerNavigator(
  {
    HomeItem: {
      screen: HomeItem
    },
    SettingsItem: {
      screen: SettingsItem
    }
  },
  { contentComponent: DrawerContainer }
);

export const LoginStack = StackNavigator({
  Login: {
    screen: Login
  },
  ForgotPassword: {
    screen: ForgotPassword
  }
});

const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName } = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
    ? null
    : getStateForAction(action, state);
  // you might want to replace 'null' with 'state' if you're using redux (see comments below)
};

MainStack.router.getStateForAction = navigateOnce(
  MainStack.router.getStateForAction
);
LoginStack.router.getStateForAction = navigateOnce(
  LoginStack.router.getStateForAction
);
