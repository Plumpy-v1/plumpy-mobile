import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import MainServiceScreen from "../screens/MainServiceScreen";
import NearEvent from "../screens/NearEvent";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeTabNavigation = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // activeTintColor: "#f15454",
        style: {
          width: "100%",
          height: "9%",
          borderColor: "transparent",
          overflow: "hidden",
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={MainServiceScreen}
        options={{
          tabBarIcon: () => <Feather name="home" size={30} color="#FF7C7C" />,

          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name={"Search"}
        component={NearEvent}
        options={{
          tabBarIcon: () => <Feather name="search" size={30} color="#FF7C7C" />,

          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name={"Chat"}
        component={MainServiceScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="wechat" size={30} color="#FF7C7C" />
          ),

          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;
