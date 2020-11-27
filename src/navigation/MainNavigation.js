import IntroOneScreen from "../screens/IntroOneScreen";
import IntroSecondScreen from "../screens/IntroSecondScreen";
import SignInScreen from "../screens/SignInScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


export const AppStack = createStackNavigator(
  {
    IntroOne: {
      screen: IntroOneScreen,
      navigationOptions: {
        header: null,
      },
    },

    IntroSecond: {
      screen: IntroSecondScreen,
      navigationOptions: {
        header: null,
      },
    },
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: "IntroOne",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);
