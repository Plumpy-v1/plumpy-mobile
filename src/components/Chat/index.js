import React, { useState, useEffect } from "react";
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

const index = ({ userName }) => {
  const [socket, setSocket] = useState(io(env.socketUrl));
  const [messages, setMessages] = useState([{}]);
  let roomId = "8095f6e4-3ba8-479e-887c-e83064de4748";
  // console.log({ parajm: route.params });

  // const { userName } = route.params;/

  // const userName = "mohti";
  // let eventData = JSON.parse(res);

  // console.log({ deno: eventData });

  useEffect(() => {
    // console.log({ itsRun: true, socketUrl: env.socketUrl });

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
      console.log({ userName, text, timeStamp });
      messages.push({ userName, text, timeStamp });
      setMessages([...messages]);
    });
  }, []);

  // starting messages
  useEffect(() => {
    const getAllMessages = async () => {
      const sharedData = await Get_shareddata();
      // console.log({ sharedData });

      const query = `query{
        viewer
        {
          getAllMessages(roomId:"8095f6e4-3ba8-479e-887c-e83064de4748")
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

      //  console.log({ query });
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

        // console.log({ Listdata: data.data.viewer.participateEvents.edges });

        if (!!data.data.viewer.getAllMessages) {
          setMessages(data.data.viewer.getAllMessages.chatsMessages);
        }
      } catch (error) {
        console.log({ errorInReg: error });
      }
    };
    getAllMessages();
  }, []);

  return (
    <View style={styles.mainchat}>
      <View style={styles.room}>
        <Text style={styles.roomtext}>Room name</Text>
      </View>

      <MessagesContainer data={data} messages={messages} userName={userName} />

      <SendMessage socket={socket} userName={userName} roomId={roomId} />
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
