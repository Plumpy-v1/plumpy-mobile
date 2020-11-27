import IntroOneScreen from "../screens/IntroOneScreen";
import IntroSecondScreen from "../screens/IntroSecondScreen";
import SignInScreen from "../screens/SignInScreen";
import { createStackNavigator } from "react-navigation-stack";


export const AppStack = createStackNavigator(
  {
    IntroOne: {
      screen: IntroOneScreen,
      navigationOptions: {
        headerShown: false
        
      },
    },

    IntroSecond: {
      screen: IntroSecondScreen,
      navigationOptions: {
        headerShown: false
      },
    },
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        headerShown: false
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
