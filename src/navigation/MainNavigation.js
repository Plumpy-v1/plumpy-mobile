import React from "react";
import IntroOneScreen from "../screens/IntroOneScreen";
import IntroSecondScreen from "../screens/IntroSecondScreen";
import SignInScreen from "../screens/SignInScreen";
import NearEvent from "../screens/NearEvent";
import HomeScreenTest from "../screens/HomeScreenTest";
import HomeTabNavigation from "./HomeTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../screens/SignUpScreen";

// Old Navigation

// export const AppStack = createStackNavigator(
//   {
//     IntroOne: {
//       screen: IntroOneScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },

//     IntroSecond: {
//       screen: IntroSecondScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     SignIn: {
//       screen: SignInScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     NearEvent: {
//       screen: NearEvent,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     HomeTest: {
//       screen: HomeScreenTest,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//   },
//   {
//     initialRouteName: "HomeTest",
//     defaultNavigationOptions: {
//       headerShown: false,
//     },
//   }
// );

// New Navigation

const Stack = createStackNavigator();

export const AppStack = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"IntroOne"}
          component={IntroOneScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"HomeTab"}
          component={HomeTabNavigation}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"IntroSecond"}
          component={IntroSecondScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"SignIn"}
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"SignUp"}
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"NearEvent"}
          component={NearEvent}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"HomeTest"}
          component={HomeScreenTest}
          options={{
            title: "How many people?",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
