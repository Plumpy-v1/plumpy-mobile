import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Constants } from "expo";
import ChatScreen from "../screens/ChatScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ChatRoom from "../screens/ChatRoom";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Back, Profile } from "../components/HeaderComponent/NavIcon";
// import { StackActions } from '@react-navigation/native';
import MainServiceScreen from "../screens/MainServiceScreen";
import NearEvent from "../screens/NearEvent";
import SignInScreen from "../screens/SignInScreen";
import HistoryEvents from "../screens/HistoryEvents";
import JoinedEvent from "../screens/JoinedEvent";
import EventDetails from "../screens/EventDetails";
const Stack1 = createStackNavigator();

const MainServiceTabScreens = () => {
  return (
    <Stack1.Navigator>
      <Stack1.Screen
        options={{ headerShown: false }}
        name='HomePage'
        component={MainServiceScreen}
      />
      <Stack1.Screen
        name='NearEvent'
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
      <Stack1.Screen
        options={{ headerShown: false }}
        name='HistoryEvents'
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
      <Stack1.Screen
        name='EventDetails'
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
      <Stack1.Screen
        name='JoinedEvent'
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

      {/* <Stack1.Screen name="JoinedEvent" component={JoinedEvent} /> */}
    </Stack1.Navigator>
  );
};

const Stack2 = createStackNavigator();
const Tab2Screens = () => {
  return (
    // Add Search module related bottomtab
    <Stack2.Navigator>
      <Stack2.Screen
        name='Search'
        component={ChatRoom}
        options={{
          tabBarIcon: () => <Feather name='search' size={30} color='#FF7C7C' />,

          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Stack2.Navigator>
  );
};
const Stack3 = createStackNavigator();
const Tab3Screens = () => {
  return (
    <Stack3.Navigator>
      <Stack3.Screen
        name='ChatRoom'
        component={ChatRoom}
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
            <Profile onPress={() => navigation.navigate("ProfileScreen")} />
          ),
          headerRightContainerStyle: { padding: 15 },
        })}
      />
    </Stack3.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabScreens = () => {
  return (
    <Tab.Navigator
      // tabBar={(props) => <MyTabBar {...props} />}
      tabBarOptions={{
        // activeTintColor: "#f15454",
        style: {
          width: "100%",
          height: "9%",
          borderColor: "transparent",
          overflow: "hidden",
        },
      }}
      initialRouteName='Tab1Screens'
    >
      <Tab.Screen
        name='Tab1Screens'
        options={{
          tabBarIcon: () => <Feather name='home' size={30} color='#FF7C7C' />,

          tabBarLabel: () => {
            return null;
          },
        }}
        component={MainServiceTabScreens}
      />
      <Tab.Screen
        name='Tab2Screens'
        options={{
          tabBarIcon: () => <Feather name='search' size={30} color='#FF7C7C' />,

          tabBarLabel: () => {
            return null;
          },
        }}
        component={Tab2Screens}
      />
      <Tab.Screen
        name='Tab3Screens'
        component={Tab3Screens}
        options={{
          tabBarIcon: () => (
            <FontAwesome name='wechat' size={30} color='#FF7C7C' />
          ),

          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const HomeTabNavigation = () => {
  return <TabScreens />;
};

export default HomeTabNavigation;
