import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { AppStack } from "./MainNavigation";
import Parth from "../screens/Parth";

const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
    // Parth: {
    //   screen: Parth,
    // },
  },
  {
    // initialRouteName: "Parth",
    initialRouteName: "App",
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
