import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatRoom = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>Chat Room</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#FBE7E3",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3%",
  },
  title_text: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
  },
});

export default ChatRoom;
