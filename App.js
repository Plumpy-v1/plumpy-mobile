import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IntroOneScreen from "./src/screens/IntroOneScreen";
import IntroSecondScreen from "./src/screens/IntroSecondScreen";
import SignInScreen from "./src/screens/SignInScreen";
// import Second from "./src/screens/Second";


const navigator = createStackNavigator(
  {
    IntroOne: IntroOneScreen,
    Second: IntroSecondScreen,
    SignIn: SignInScreen
    // Component: ComponentsScreen,
    
  },
  {
    initialRouteName: "SignIn",
    defaultNavigationOptions: {
      headerShown: false
    },
  }
);

export default createAppContainer(navigator);
