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
import MainServiceScreen from "../screens/MainServiceScreen";
import {
  Back,
  Profile,
} from "../components/NearEventContainer/HeaderComponent/NavIcon";
import { Navigation } from "react-native-navigation";
import { Feather } from "@expo/vector-icons";
// Old Navigation

// New Navigation

const Stack = createStackNavigator();

export const AppStack = ({ navigation }) => {
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
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerTitleStyle: { fontFamily: "Poppins-Bold" },
            headerTransparent: true,
            headerTitleAlign: "center",
            headerLeft: () => <Back onPress={() => navigation.pop()} />,
            headerLeftContainerStyle: { padding: 15 },
            headerRight: () => (
              <Profile onPress={() => navigation.navigate("")} />
            ),
            headerRightContainerStyle: { padding: 15 },
          })}
        />
        <Stack.Screen
          name={"HomePage"}
          component={MainServiceScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"HomeTest"}
          component={HomeScreenTest}
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerTitleStyle: { fontFamily: "Poppins-Bold" },
            headerTransparent: true,
            headerTitleAlign: "center",
            headerLeft: () => <Back onPress={() => navigation.pop()} />,
            headerLeftContainerStyle: { padding: 15 },
            headerRight: () => (
              <Profile onPress={() => navigation.navigate("")} />
            ),
            headerRightContainerStyle: { padding: 15 },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
