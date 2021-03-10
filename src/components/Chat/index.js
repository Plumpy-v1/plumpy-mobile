import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonStyles } from "../../styles/CommonStyles";
import { env } from "../../../env";
import io from "socket.io-client";
import SendMessage from "./sendMessage/index";
// let initialSocket;
const index = () => {
  const [socket, setSocket] = useState(io(env.socketUrl));
  useEffect(() => {
    console.log({ itsRun: true, socketUrl: env.socketUrl });

    // socket = io(env.socketUrl);
    // setSocket(socket);

    socket.emit(
      "join",
      { userName: "mohit", roomId: "8095f6e4-3ba8-479e-887c-e83064de4748" },
      (err, user) => {
        if (err) {
          console.log({ mohitJoinError: err });
        }
      }
    );

    return () => {
      console.log({ itsRun: false });
      socket.emit("connectionLost");
      socket.off();
    };
  }, [env.socketUrl]);

  useEffect(() => {
    socket.on("message", ({ user, text }) => {
      console.log({ user, text });
    });
  }, []);

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
      <SendMessage socket={socket} />
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
});

export default index;
