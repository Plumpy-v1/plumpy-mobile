import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonStyles } from "../styles/CommonStyles";

const ChatScreen = () => {
  return (
    <View style={styles.mainchat}>
      <View style={styles.room}>
        <Text style={styles.roomtext}>Room name</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.recived}>
          <Text
            style={[
              styles.text,
              { fontSize: 15, fontFamily: "Poppins-SemiBold" },
            ]}
          >
            Name
          </Text>
          <Text style={styles.text}>
            Hello school mates welcome all to new chat room!! here we go
          </Text>
        </View>
        <View style={styles.sender}>
          <Text style={[styles.text, { color: "#fff" }]}>
            Hello guys here i am back with onther video
          </Text>
        </View>
        <View style={styles.recived}>
          <Text
            style={[
              styles.text,
              { fontSize: 15, fontFamily: "Poppins-SemiBold" },
            ]}
          >
            Name
          </Text>
          <Text style={styles.text}>
            Hello school mates welcome all to new chat room!! here we go
          </Text>
        </View>
        <View style={styles.sender}>
          <Text style={[styles.text, { color: "#fff" }]}>
            Hello guys here i am back with onther video
          </Text>
        </View>
        <View style={styles.recived}>
          <Text
            style={[
              styles.text,
              { fontSize: 15, fontFamily: "Poppins-SemiBold" },
            ]}
          >
            Name
          </Text>
          <Text style={styles.text}>
            Hello school mates welcome all to new chat room!! here we go
          </Text>
        </View>
        <View style={styles.sender}>
          <Text style={[styles.text, { color: "#fff" }]}>
            Hello guys here i am back with onther video
          </Text>
        </View>
      </ScrollView>

      <View style={styles.chatinput}>
        <TextInput
          placeholder="Type here..."
          placeholderTextColor="#292929"
          style={
            (CommonStyles.textInput,
            {
              backgroundColor: "#fff",
              paddingVertical: "2%",
              borderRadius: 7,
              paddingHorizontal: "4%",
              color: "black",
              width: "85%",
            })
          }
          underlineColorAndroid="transparent"
          // value={send}
          // onChangeText={(uname) => setUsername(uname)}
        />
        <TouchableOpacity
          style={{
            height: 44,
            width: 44,
            backgroundColor: "#FF7C7C",
            justifyContent: "center",
            alignItems: "center",
            padding: "4%",
            borderRadius: 7,
            marginHorizontal: "9%",
          }}
        >
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
  chatinput: {
    marginHorizontal: "5%",
    flexDirection: "row",
    marginVertical: "5%",
    // alignSelf: "flex-end",
    height: "8%",
  },
});

export default ChatScreen;
