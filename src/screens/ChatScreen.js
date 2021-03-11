import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonStyles } from "../styles/CommonStyles";
import Chat from "../components/Chat";
const ChatScreen = ({ route }) => {
  const { userName } = route.params;
  // console.log({ userName });
  return <Chat userName={userName} />;
};

export default ChatScreen;
