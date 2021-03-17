// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Feather } from "@expo/vector-icons";
// import MainServiceScreen from "../screens/MainServiceScreen";
// import ChatScreen from "../screens/ChatScreen";
// import NearEvent from "../screens/NearEvent";
// import { FontAwesome } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator();

// const HomeTabNavigation = (props) => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         // activeTintColor: "#f15454",
//         style: {
//           width: "100%",
//           height: "9%",
//           borderColor: "transparent",
//           overflow: "hidden",
//         },
//       }}
//     >
//       <Tab.Screen
//         name={"Home"}
//         component={MainServiceScreen}
//         options={{
//           tabBarIcon: () => <Feather name="home" size={30} color="#FF7C7C" />,

//           tabBarLabel: () => {
//             return null;
//           },
//         }}
//       />
//       <Tab.Screen
//         name={"Search"}
//         component={NearEvent}
//         options={{
//           tabBarIcon: () => <Feather name="search" size={30} color="#FF7C7C" />,

//           tabBarLabel: () => {
//             return null;
//           },
//         }}
//       />
//       <Tab.Screen
//         name={"Chat"}
//         component={ChatScreen}
//         options={{
//           tabBarIcon: () => (
//             <FontAwesome name="wechat" size={30} color="#FF7C7C" />
//           ),

//           tabBarLabel: () => {
//             return null;
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default HomeTabNavigation;

import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Constants } from "expo";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Back, Profile } from "../components/HeaderComponent/NavIcon";
// import { StackActions } from '@react-navigation/native';
import MainServiceScreen from "./MainServiceScreen";
import NearEvent from "./NearEvent";
import SignInScreen from "./SignInScreen";
import HistoryEvents from "./HistoryEvents";
import JoinedEvent from "./JoinedEvent";
import EventDetails from "./EventDetails";
const Stack1 = createStackNavigator();

const MainServiceTabScreens = () => {
  return (
    <Stack1.Navigator>
      <Stack1.Screen
        options={{ headerShown: false }}
        name="HomePage"
        component={MainServiceScreen}
      />
      <Stack1.Screen
        name="NearEvent"
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
        name="HistoryEvents"
        component={HistoryEvents}
      />
      <Stack1.Screen
        name="EventDetails"
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
        name="JoinedEvent"
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
      <Stack1.Screen name="JoinedEvent" component={JoinedEvent} />
    </Stack1.Navigator>
  );
};

const Stack2 = createStackNavigator();
const Tab2Screens = () => {
  return (
    // Add Search module related bottomtab
    <Stack2.Navigator>
      <Stack2.Screen
        name="Search"
        component={null}
        options={{
          tabBarIcon: () => <Feather name="search" size={30} color="#FF7C7C" />,

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
      <Stack3.Screen name="SignIn" component={null} />
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
      initialRouteName="Tab1Screens"
    >
      <Tab.Screen
        name="Tab1Screens"
        options={{
          tabBarIcon: () => <Feather name="home" size={30} color="#FF7C7C" />,

          tabBarLabel: () => {
            return null;
          },
        }}
        component={MainServiceTabScreens}
      />
      <Tab.Screen
        name="Tab2Screens"
        options={{
          tabBarIcon: () => <Feather name="search" size={30} color="#FF7C7C" />,

          tabBarLabel: () => {
            return null;
          },
        }}
        component={Tab2Screens}
      />
      <Tab.Screen
        name="Tab3Screens"
        component={Tab3Screens}
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

// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <View style={{ flexDirection: "row" }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         //Please be aware that this can be greatly improved
//         //checking for which route.state.routeNames is being directed from
//         // add logic accordingly
//         const onPress = () => {
//           try {
//             navigation.reset({
//               index: 0,
//               routes: [{ name: "Screen1" }],
//             });
//           } catch {
//             TypeError;
//           }
//           {
//             console.log(route.state);
//             const event = navigation.emit({
//               type: "tabPress",
//               target: route.key,
//             });

//             if (!isFocused && !event.defaultPrevented) {
//               navigation.navigate(route.name);
//             }
//           }
//         };
//         const onLongPress = () => {
//           navigation.emit({
//             type: "tabLongPress",
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole='button'
//             accessibilityStates={isFocused ? ["selected"] : []}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//             <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

const HomeTabNavigation = () => {
  return <TabScreens />;
};

export default HomeTabNavigation;
