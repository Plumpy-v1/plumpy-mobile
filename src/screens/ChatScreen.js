import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { CommonStyles } from "../styles/CommonStyles";

const data = [
  {
    isLeft: true,
    text: "Hello guys",
  },
  {
    isLeft: false,
    text: "I am new here",
  },
  {
    isLeft: true,
    text: "Ok Lol i am also",
  },
  {
    isLeft: true,
    text: "Yo yoo yo",
  },
  {
    isLeft: true,
    text: "Hello guys",
  },
  {
    isLeft: false,
    text: "I am new here",
  },
  {
    isLeft: false,
    text: "Ok Lol i am also",
  },
  {
    isLeft: true,
    text: "Yo yoo yo",
  },
];

const ChatScreen = () => {
  return (
    <View style={styles.mainchat}>
      <View style={styles.room}>
        <Text style={styles.roomtext}>Room name</Text>
      </View>
      <ScrollView style={styles.main_innerscroll}>
        <FlatList
          data={data}
          renderItem={(item) => (
            <View style={item.item.isLeft ? styles.recived : styles.sender}>
              {item.item.isLeft && (
                <Text
                  style={[
                    styles.text,
                    { fontSize: 15, fontFamily: "Poppins-SemiBold" },
                  ]}
                >
                  Name
                </Text>
              )}
              <Text
                style={
                  item.item.isLeft
                    ? styles.text
                    : [styles.text, { color: "#fff" }]
                }
              >
                {item.item.text}
              </Text>
            </View>
          )}
        />
        {/* <View style={styles.sender}>
          <Text style={[styles.text, { color: "#fff" }]}>
            Hello guys here i am back with onther video
          </Text>
        </View> */}
      </ScrollView>

      <View style={styles.chatinput_container}>
        <TextInput
          placeholder="Type here..."
          placeholderTextColor="#292929"
          style={[CommonStyles.textInput, styles.chatinput]}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.send_btn}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainchat: {
    flex: 1,
    backgroundColor: "#FBE7E3",
    justifyContent: "space-between",
  },
  main_innerscroll: {
    flex: 1,
  },
  recived: {
    backgroundColor: "#fff",
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingVertical: "1.5%",
    width: "50%",
    marginTop: "5%",
    marginHorizontal: "5%",
    borderRadius: 15,
  },
  sender: {
    backgroundColor: "#FF5A5A",
    height: "auto",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingVertical: "1.5%",
    marginVertical: "2%",
    marginHorizontal: "5%",
    borderRadius: 15,
    width: "50%",
    alignSelf: "flex-end",
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    letterSpacing: 0.1,
  },
  room: {
    alignItems: "center",
  },
  roomtext: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
  },
  chatinput_container: {
    marginHorizontal: "5%",
    flexDirection: "row",
    marginVertical: "5%",
    // alignSelf: "flex-end",
    height: "8%",
  },
  chatinput: {
    backgroundColor: "#fff",
    paddingVertical: "2%",
    borderRadius: 7,
    paddingHorizontal: "4%",
    color: "black",
    width: "85%",
  },
  send_btn: {
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

export default ChatScreen;
