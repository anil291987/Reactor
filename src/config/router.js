/* @flow */

import {
  StackNavigator,
  NavigationActions,
  DrawerNavigator
} from "react-navigation";

import Home from "../components/home";
import Profile from "../components/profile";
import Settings from "../components/settings";
import Login from "../components/login";
import ForgotPassword from "../components/forgotpassword";

import DrawerContainer from "../components/drawer";

const HomeItem = StackNavigator({
  Home: {
    screen: Home
  }
});

const ProfileItem = StackNavigator({
  Profile: {
    screen: Profile
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
    ProfileItem: {
      screen: ProfileItem
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
};

MainStack.router.getStateForAction = navigateOnce(
  MainStack.router.getStateForAction
);
LoginStack.router.getStateForAction = navigateOnce(
  LoginStack.router.getStateForAction
);
