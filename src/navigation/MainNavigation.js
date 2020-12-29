import IntroOneScreen from "../screens/IntroOneScreen";
import IntroSecondScreen from "../screens/IntroSecondScreen";
import SignInScreen from "../screens/SignInScreen";
import { createStackNavigator } from "react-navigation-stack";
import NearEvent from "../screens/NearEvent";


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
    NearEvent:{
      screen:NearEvent,
      navigationOptions:{
        headerShown:false
      }
    }
  },
  {
    initialRouteName: "NearEvent",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);
