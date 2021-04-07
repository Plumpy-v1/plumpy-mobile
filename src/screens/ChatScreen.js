import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonStyles } from "../styles/CommonStyles";
import Chat from "../components/Chat";
import { Get_shareddata } from "../../constant";
import { env } from "../../env";
const ChatScreen = ({ route }) => {
  const { roomId, eventName } = route.params;
  const [userName, setUserName] = useState("");
  // console.log({ userName });
  // const [len, setLen] = useState(0);

  // // starting messages
  // useEffect(() => {
  //   const getAllMessages = async () => {
  //     const sharedData = await Get_shareddata();

  //     const query = `query{
  //       viewer
  //       {
  //         getAllMessages(roomId:"8095f6e4-3ba8-479e-887c-e83064de4748")
  //         {
  //           id
  //           roomId
  //           roomName
  //           eventId
  //           chatsMessages{
  //             userName
  //             text
  //             timeStamp
  //           }
  //         }
  //       }
  //     }`;

  //     const url = env.url;

  //     const params = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: sharedData.token,
  //       },
  //       body: JSON.stringify({ query }),
  //     };
  //     try {
  //       const res = await fetch(url, params);
  //       const data = await res.json();

  //       if (!!data.data.viewer.getAllMessages) {
  //         // setMessages(data.data.viewer.getAllMessages.chatsMessages);
  //         setLen(data.data.viewer.getAllMessages.chatsMessages.length);
  //         // scrollToItem();
  //       }
  //     } catch (error) {
  //       console.log({ errorInReg: error });
  //     }
  //   };
  //   getAllMessages();
  // }, []);
  // console.log(len);
  useEffect(() => {
    const setUserNameForBlock = async () => {
      const sharedData = await Get_shareddata();
      // console.log({ d: sharedData.userName });
      setUserName(sharedData.userName);
    };
    setUserNameForBlock();
  }, []);
  return (
    <Chat userName={userName} len={0} roomId={roomId} eventName={eventName} />
  );
};

export default ChatScreen;
