import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { CommonStyles } from "../../styles/CommonStyles";
import { env } from "../../../env";
import io from "socket.io-client";
import SendMessage from "./sendMessage/index";
import MessagesContainer from "./MessagesContainer";
import { Get_shareddata } from "../../../constant";

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

// let ex = {
//   userName,
//   text,
//   timeStamp,
// };

const index = ({ userName, len, roomId, eventName }) => {
  const [socket, setSocket] = useState(io(env.socketUrl));
  const [messages, setMessages] = useState([]);
  const [socketMessages, setSocketMessages] = useState([]);

  let finalMessages = [].concat(messages, socketMessages);

  const flatListRef = React.useRef();
  const scrollToItem = () => {
    console.log({
      messages: messages.length,
      socketMessages: socketMessages.length,
      len,
    });

    len + socketMessages.length > 0 &&
      flatListRef.current.scrollToIndex({
        animated: true,
        index: len + socketMessages.length - 1,
        // index: finalMessages.length,
      });
  };

  useEffect(() => {
    socket.emit("join", { userName: userName, roomId }, (err, user) => {
      if (err) {
        console.log({ mohitJoinError: err });
      }
    });

    return () => {
      console.log({ itsRun: false });
      socket.emit("connectionLost");
      socket.off();
    };
  }, [env.socketUrl]);

  // listen messages
  useEffect(() => {
    socket.on("message", ({ userName, text, timeStamp }) => {
      socketMessages.push({ userName, text, timeStamp });
      // setMessages([...messages]);

      setSocketMessages([...socketMessages]);
      scrollToItem();
      // updateMessages({ userName, text, timeStamp });
    });
  }, []);

  // starting messages
  useEffect(() => {
    const getAllMessages = async () => {
      const sharedData = await Get_shareddata();

      const query = `query{
        viewer
        {
          getAllMessages(roomId:\"${roomId}\")
          {
            id
            roomId
            roomName
            eventId
            chatsMessages{
              userName
              text
              timeStamp
            }
          }
        }
      }`;

      const url = env.url;

      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: sharedData.token,
        },
        body: JSON.stringify({ query }),
      };
      try {
        const res = await fetch(url, params);
        const data = await res.json();

        if (!!data.data.viewer.getAllMessages) {
          setMessages(data.data.viewer.getAllMessages.chatsMessages);
          scrollToItem();
        }
      } catch (error) {
        console.log({ errorInReg: error });
      }
    };
    getAllMessages();
  }, []);

  // useEffect(() => {
  //   scrollToItem();
  // }, [messages, socketMessages]);

  return (
    <View style={styles.mainchat}>
      <View style={styles.room}>
        <Text style={styles.roomtext}>{eventName}</Text>
      </View>

      <MessagesContainer
        data={data}
        messages={finalMessages.reverse()}
        userName={userName}
        flatListRef={flatListRef}
      />

      <SendMessage
        socket={socket}
        userName={userName}
        roomId={roomId}
        scrollToItem={scrollToItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainchat: {
    flex: 1,
    backgroundColor: "#FBE7E3",
    justifyContent: "space-between",
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

export default index;
