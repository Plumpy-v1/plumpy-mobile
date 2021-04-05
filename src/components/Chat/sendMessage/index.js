import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonStyles } from "../../../styles/CommonStyles";
function index({ socket, userName, roomId }) {
  const [value, setValue] = useState("");
  const _sendMessage = () => {
    if (value) {
      socket.emit("sendMessage", { message: value, userName, roomId }, () =>
        setValue("")
      );
    }
  };
  return (
    <>
      <View style={styles.chatinput}>
        <TextInput
          placeholder="Type here..."
          placeholderTextColor="#292929"
          style={[CommonStyles.textInput, styles.textInputStyle]}
          underlineColorAndroid="transparent"
          value={value}
          onChangeText={(uname) => setValue(uname)}
        />
        <TouchableOpacity style={styles.btnStyle} onPress={_sendMessage}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default index;

const styles = StyleSheet.create({
  chatinput: {
    marginHorizontal: "5%",
    flexDirection: "row",
    marginVertical: "5%",
    // alignSelf: "flex-end",
    height: "8%",
  },
  textInputStyle: {
    backgroundColor: "#fff",
    paddingVertical: "2%",
    borderRadius: 7,
    paddingHorizontal: "4%",
    color: "black",
    // width: "85%",
    height: 45,
  },
  btnStyle: {
    height: 44,
    width: 44,
    backgroundColor: "#FF7C7C",
    justifyContent: "center",
    alignItems: "center",
    padding: "4%",
    borderRadius: 7,
    marginHorizontal: "9%",
  },
});
