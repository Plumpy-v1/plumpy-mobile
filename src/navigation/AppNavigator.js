import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { AppStack } from "./MainNavigation";


const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
  },
  {
    initialRouteName: "App",
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
