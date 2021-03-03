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
import { Back, Profile } from "../components/HeaderComponent/NavIcon";
import { Navigation } from "react-native-navigation";
import { Feather } from "@expo/vector-icons";
import ImageComponent from "../components/ImageSelection/ImageComponent";
import ImageSelectionContainer from "../screens/ImageSelectionContainer";
import FutureEvents from "../screens/FutureEvents";
import PollScreen from "../screens/PollScreen";
import PollUpVoteContainer from "../components/PollUpVote/PollUpVoteContainer";
import EventRequest from "../screens/EventRequest";
import HistoryEvents from "../screens/HistoryEvents";
import ChatScreen from "../screens/ChatScreen";

export const navigationiteam = {
  IntroOne: "IntroOne",
  HomeTab: "HomeTab",
  IntroSecond: "IntroSecond",
  SignIn: "SignIn",
  SignUp: "SignUp",
  NearEvent: "NearEvent",
  HistoryEvents: "HistoryEvents",
  HomePage: "HomePage",
  ImageSelection: "ImageSelection",
  FutureEvents: "FutureEvents",
  PollScreen: "PollScreen",
  EventRequest: "EventRequest",
  HomeTest: "HomeTest",
  UserProfile: "UserProfile",
  JoinedEvent: "JoinedEvent",
  EventDetails: "EventDetails",
};
import EventDetails from "../screens/EventDetails";
import JoinedEvent from "../screens/JoinedEvent";
import ProfileScreen from "../screens/ProfileScreen";

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
            headerTitleStyle: { fontFamily: "Poppins-Bold", color: "#ffffff" },
            headerTransparent: true,
            headerTitleAlign: "center",
            headerLeft: () => <Back onPress={() => navigation.pop()} />,
            headerLeftContainerStyle: { padding: 15 },
            headerRight: () => (
              <Profile onPress={() => navigation.navigate("ProfileScreen")} />
            ),
            headerRightContainerStyle: { padding: 15 },
          })}
        />

        <Stack.Screen
          name={"EventDetails"}
          component={EventDetails}
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerStyle: { backgroundColor: "#FBE7E3" },

            headerTitleStyle: { fontFamily: "Poppins-Bold", color: "#FF7C7C" },
            //headerTransparent: true,
            headerTitleAlign: "center",
            headerLeft: () => <Back onPress={() => navigation.pop()} />,
            headerLeftContainerStyle: { padding: 15 },
            headerRight: () => (
              <Profile onPress={() => navigation.navigate("ProfileScreen")} />
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
          name={"PollScreen"}
          component={PollScreen}
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerTitleStyle: { fontFamily: "Poppins-Bold", color: "#FF7C7C" },
            // headerTransparent: true,
            headerStyle: { backgroundColor: "#FBE7E3" },

            headerTitleAlign: "center",
            headerLeft: () => <Back onPress={() => navigation.pop()} />,
            headerLeftContainerStyle: { padding: 15 },
            headerRight: () => (
              <Profile onPress={() => navigation.navigate("ProfileScreen")} />
            ),
            headerRightContainerStyle: { padding: 15 },
          })}
        />
        <Stack.Screen
          name={"FutureEvents"}
          component={FutureEvents}
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerStyle: { backgroundColor: "#FBE7E3" },

            headerTitleStyle: { fontFamily: "Poppins-Bold" },
            //headerTransparent: true,
            headerStyle: { backgroundColor: "#FBE7E3" },

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
          name={"ChatScreen"}
          component={ChatScreen}
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerStyle: { backgroundColor: "#FBE7E3" },

            headerTitleStyle: { fontFamily: "Poppins-Bold" },
            //headerTransparent: true,
            headerStyle: { backgroundColor: "#FBE7E3" },

            headerTitleAlign: "center",
            headerLeft: () => <Back onPress={() => navigation.pop()} />,
            headerLeftContainerStyle: { padding: 15 },
            headerRight: () => (
              <Profile onPress={() => navigation.navigate("")} />
            ),
            headerRightContainerStyle: { padding: 15 },
          })}
        />
        {/* 
        <Stack.Screen
          name={"PollScreen"}
          component={PollScreen}
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerTitleStyle: { fontFamily: "Poppins-Bold", color: "#FF7C7C" },
            // headerTransparent: true,
            headerStyle: { backgroundColor: "#FBE7E3" },
          })}
        /> */}

        <Stack.Screen
          name={"ImageSelection"}
          component={ImageSelectionContainer}
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerStyle: { backgroundColor: "#FBE7E3" },

            headerTitleStyle: { fontFamily: "Poppins-Bold" },
            //headerTransparent: true,
            headerTitleAlign: "center",
            headerLeft: () => <Back onPress={() => navigation.pop()} />,
            headerLeftContainerStyle: { padding: 15 },
            headerRight: () => (
              <Profile onPress={() => navigation.navigate("ProfileScreen")} />
            ),
            headerRightContainerStyle: { padding: 15 },
          })}
        />

        <Stack.Screen
          name={"EventRequest"}
          component={EventRequest}
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerTitleStyle: { fontFamily: "Poppins-Bold", color: "#FF7C7C" },
            // headerTransparent: true,
            headerStyle: { backgroundColor: "#FBE7E3" },

            headerTitleAlign: "center",
            headerLeft: () => <Back onPress={() => navigation.pop()} />,
            headerLeftContainerStyle: { padding: 15 },
            headerRight: () => (
              <Profile onPress={() => navigation.navigate("ProfileScreen")} />
            ),
            headerRightContainerStyle: { padding: 15 },
          })}
        />
        <Stack.Screen
          name={"HistoryEvents"}
          component={HistoryEvents}
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerTitleStyle: { fontFamily: "Poppins-Bold" },
            headerTransparent: true,
            headerTitleAlign: "center",
            headerLeft: () => <Back onPress={() => navigation.pop()} />,
            headerLeftContainerStyle: { padding: 15 },
            headerRight: () => (
              <Profile onPress={() => navigation.navigate("ProfileScreen")} />
            ),
            headerRightContainerStyle: { padding: 15 },
          })}
        />

        <Stack.Screen
          name={"ProfileScreen"}
          component={ProfileScreen}
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerTitleStyle: { fontFamily: "Poppins-Bold", color: "#ffffff" },
            headerTransparent: true,
            headerTitleAlign: "center",
            headerLeft: () => <Back onPress={() => navigation.pop()} />,
            headerLeftContainerStyle: { padding: 15 },
          })}
        />

        <Stack.Screen
          name={"JoinedEvent"}
          component={JoinedEvent}
          options={({ navigation }) => ({
            headerTitle: "Plumpy",
            headerTitleStyle: { fontFamily: "Poppins-Bold", color: "#FF7C7C" },
            headerTransparent: true,
            headerTitleAlign: "center",
            headerLeft: () => <Back onPress={() => navigation.pop()} />,
            headerLeftContainerStyle: { padding: 15 },
            headerRight: () => (
              <Profile onPress={() => navigation.navigate("ProfileScreen")} />
            ),
            headerRightContainerStyle: { padding: 15 },
          })}
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
              <Profile onPress={() => navigation.navigate("ProfileScreen")} />
            ),
            headerRightContainerStyle: { padding: 15 },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
